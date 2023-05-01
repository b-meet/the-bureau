import { ImArrowUpRight2 } from "react-icons/im";
import Image from "next/image";

import tempImg from "../../assets/images/hero.jpg";
import ArticleSnippet from "./ArticleSnippet";
import { Fragment } from "react";
import Link from "next/link";

const topStories = [
	{
		title: "Investigations",
		heading:
			"Suspects in alleged Markham illeaal casino mansion linked to B.C. casino suspects",
		snippet:
			"Alleged criminal activities in Richmond, B.C., and Markham, Ontario have come into focus in recent weeks...",
		link: "investigations",
		image: "",
	},
	{
		title: "Geopolitics & Finance",
		heading:
			"Over $154M tied to detained invested in GTA real estate Chinese-Canadian oligarch",
		snippet:
			"Xiao Jianhua, a Chinese-Canadian billinaire was abduted in 2017. A Global News investigation has found...",
		image: "",
		link: "geopolitics-Finance",
	},
	{
		title: "Health",
		heading:
			"Why is the world Heaith Organization accused of mishandling the coronavirus",
		snippet:
			"Teresa Tam is hopeful Canada's advance order deals from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply...",
		image: "",
		link: "health",
	},
	{
		title: "Technology",
		heading:
			"Canada's cyber agency dismantling fake government coronavirus pandemic response",
		snippet:
			"A letter sent to MP's by Publice Safety Minister Bill Blair has described China's extensive foreign interference...",
		image: "",
		link: "technology",
	},
	{
		title: "National Security",
		heading:
			"Why is the World Health Organization accused of mishandling the pandemic?",
		snippet:
			"A letter sent to MP's by Publice Safety Minister Bill Blair has described China's extensive foreign interference...",
		image: "",
		link: "national-security",
	},
	{
		title: "Op/Analysis",
		heading:
			"Beta partner network rockstar direct mailing MVP ramen infographic client",
		snippet:
			"A letter sent to MP's by Publice Safety Minister Bill Blair has described China's extensive foreign interference...",
		image: "",
		link: "op-analysis",
	},
];

const MainHeadLines = () => {
	return topStories.map(({ title, heading, snippet, link, image }) => {
		const article = { title: heading, snippet };
		return (
			<Fragment key={title}>
				<section className='flex justify-between items-start min-w-full border-t-2 pt-4 mb-14 border-slate-900'>
					<div className='flex-1 space-y-1'>
						<h3 className='text-4xl font-semibold max-w-[350px]'>
							{title}
						</h3>
						<Link href={link} className='link-with-arrow'>
							see all <ImArrowUpRight2 />
						</Link>
					</div>
					<div className='flex-1 flex justify-end gap-10 max-w-max'>
						<ArticleSnippet isTopStory={false} article={article} />
						<Image
							src={tempImg}
							alt='story images'
							className='w-64'
						/>
					</div>
				</section>
			</Fragment>
		);
	});
};

export default MainHeadLines;
