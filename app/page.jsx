"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Item, Navbar } from "@/components";

const Homepage = () => {
	const [challenges, setChallenges] = useState([]);

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
		fetchData().then((res) => {
			setChallenges(res);
		});
	}, []);

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
			<main className={styles.catalog}>
				{challenges.map((femRepo) => {
					return (
						<Item
							key={femRepo.id}
							title={femRepo.description}
							demoLink={femRepo.homepage}
							sourceLink={femRepo.html_url}
						/>
					);
				})}
			</main>
		</>
	);
};

export default Homepage;
