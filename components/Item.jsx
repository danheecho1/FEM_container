import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Item.module.css";

const Item = () => {
	return (
		<>
			<article className={styles.item}>
				<h2 className={styles.title}>FAQ Accordion</h2>
				<Image
					src="/sample.png"
					width="275"
					height="200"
					alt="Project 1"
					className={styles.preview}
				/>
				<div className={styles.buttonsDiv}>
					<Link href="https://google.com" className={styles.source}>
						Go to source
					</Link>
					<Link href="https://google.com" className={styles.demo}>
						Live demo
					</Link>
				</div>
			</article>
		</>
	);
};

export default Item;
