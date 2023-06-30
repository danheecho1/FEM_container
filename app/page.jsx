"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Item, Navbar } from "@/components";

const Homepage = () => {
	const [challenges, setChallenges] = useState([]);
	const [femChallenges, setFemChallenges] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchKey, setSearchKey] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://api.github.com/users/danheecho1/repos`
			);
			const data = await response.json();
			const filteredData = await data.filter((repo) => {
				return (
					repo["name"].indexOf("FEM") === 0 &&
					repo["name"] !== "FEM_container"
				);
			});
			return filteredData;
		};

		const fetchChallenges = async () => {
			const res = await fetch("/api/scrape");
			const femData = await res.json();
			return femData;
		};

		Promise.all([fetchData(), fetchChallenges()])
			.then(([data, femData]) => {
				setChallenges(data);
				setFemChallenges(femData);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<>
				<Navbar />
				<section className={styles.searchBarDiv}>
					<form>
						<input type="text" className={styles.searchBar} />
						<button>
							<Image
								src="/search.svg"
								width="15"
								height="15"
								className={styles.searchImage}
								alt="Search submit button"
							/>
						</button>
					</form>
				</section>
				<p className={styles.loadingText}>Loading...</p>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<section className={styles.searchBarDiv}>
				<input
					type="text"
					className={styles.searchBar}
					onChange={(e) => {
						setSearchKey(e.target.value);
					}}
				/>
				<button type="button">
					<Image
						src="/search.svg"
						width="15"
						height="15"
						className={styles.searchImage}
						alt="Search submit button"
					/>
				</button>
			</section>
			<main className={styles.catalog}>
				{challenges
					.filter((femRepo) => {
						return femRepo.description
							.toLowerCase()
							.includes(searchKey.toLowerCase());
					})
					.map((femRepo) => {
						const matchingChallenge = femChallenges.find(
							(challenge) =>
								challenge.title === femRepo.description
						);
						const previewUrl = matchingChallenge
							? matchingChallenge.imgUrl
							: "";
						return (
							<Item
								key={femRepo.id}
								title={femRepo.description}
								demoLink={femRepo.homepage}
								sourceLink={femRepo.html_url}
								preview={previewUrl}
							/>
						);
					})}
			</main>
		</>
	);
};

export default Homepage;
