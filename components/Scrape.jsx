// Will not work because puppeteer is a node.js library.. JS in a frontend environment runs in a browser sandbox. 

import puppeteer from "puppeteer";

const Scrape = async () => {
	const browser = await puppeteer.launch({
		headless: "new",
		defaultViewport: null,
	});
	const page = await browser.newPage();
	await page.goto("https://www.frontendmentor.io/challenges", {
		waitUntil: "domcontentloaded",
	});
	const allChallenges = await page.evaluate(() => {
		const challenges = document.querySelectorAll(
			".Card__Wrapper-sc-1ad0ofr-0"
		);
		return Array.from(challenges).map((challenge) => {
			const title = challenge.querySelector(
				".Content__Wrapper-sc-f0243o-0 .Heading__Wrapper-sc-1v0dkkd-0"
			).innerText;
			const imgUrl = challenge
				.querySelector(".image-wrapper .Image__Wrapper-sc-fh06ek-0 img")
				.getAttribute("src");
			return { title, imgUrl };
		});
	});
	console.log(allChallenges);
	await browser.close();
	return (
		<p>{allChallenges}</p>
	);
};

export default Scrape;