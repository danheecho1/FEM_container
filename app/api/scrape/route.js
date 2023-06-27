const puppeteer = require("puppeteer");
import { NextResponse } from "next/server";

export async function GET() {
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
				".Content__Wrapper-sc-f0243o-0 .Text__Wrapper-sc-zbm6r7-0 a"
			).textContent;
			const imgUrl = challenge
				.querySelector(".image-wrapper .Image__Wrapper-sc-fh06ek-0 img")
				.getAttribute("src");
			const obj = {
				title: title,
				imgUrl: imgUrl,
			};
			return obj;
		});
	});
	await browser.close();
	return NextResponse.json(allChallenges);
}
