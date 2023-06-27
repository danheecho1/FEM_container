import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Item.module.css";

const Item = (props) => {
	return (
		<>
			<article className={styles.item}>
				<h2 className={styles.title}>{props.title}</h2>
				<Image
					src={props.preview}
					width="275"
					height="200"
					alt={props.preview}
					className={styles.preview}
				/>
				<div className={styles.buttonsDiv}>
					<Link
						href={props.sourceLink}
						target="_blank"
						className={styles.source}>
						Go to source
					</Link>
					<Link
						href={props.demoLink}
						target="_blank"
						className={styles.demo}>
						Live demo
					</Link>
				</div>
			</article>
		</>
	);
};

export default Item;
