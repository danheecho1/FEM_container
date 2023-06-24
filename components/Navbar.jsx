import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<>
			<header className={styles.header}>
				<Image
					src="/femContainer.svg"
					width="182"
					height="60"
					alt="Logo of FEM Container"
					className={styles.logo}
				/>
				<nav className={styles.navBar}>
					<ul>
						<li>
							<Link
								href="https://www.github.com/danheecho1"
								target="_blank">
								<Image
									src="/github.svg"
									width="36"
									height="36"
									alt="Link to Danny's Github"
									className={styles.github}
								/>
							</Link>
						</li>
						<li>
							<Link href="https://google.com" target="_blank">
								<Image
									src="/portfolio.svg"
									width="36"
									height="36"
									alt="Link to Danny's portfolio"
									className={styles.portfolio}
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
