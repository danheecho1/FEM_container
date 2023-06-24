import React from "react";
import Image from "next/image";
import styles from "./page.module.css"
import { Item, Navbar } from "@/components";

const Homepage = () => {
	return (
		<>
			<Navbar />
      <section className={styles.searchBarDiv}>
					<form>
						<input type="text" className={styles.searchBar} />
            <button><Image src="/search.svg" width="15" height="15" className={styles.searchImage} /></button>
					</form>
				</section>
      <main className={styles.catalog}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </main>
		</>
	);
};

export default Homepage;
