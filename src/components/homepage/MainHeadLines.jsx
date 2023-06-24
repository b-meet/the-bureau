import { ImArrowUpRight2 } from "react-icons/im";
import Image from "next/image";

import tempImg from "../../assets/images/hero.jpg";
import ArticleSnippet from "./ArticleSnippet";
import Link from "next/link";
import routes from "@/RouteConstant";

const topStories = [
	{
		title: "Investigations",
		heading:
			"Suspects in alleged Markham illeaal casino mansion linked to B.C. casino suspects",
		snippet:
			"Alleged criminal activities in Ontario have come into Richmond, billinaire was abduted in 2017 B.C., and Markham, Ontario have come into focus in recent weeks...",
		link: routes.INVESTIGATION,
		image: "",
	},
	{
		title: "Geopolitics & Finance",
		heading:
			"Over $154M tied to detained invested in GTA real estate Chinese-Canadian oligarch",
		snippet:
			"Xiao Jianhua, a Chinese-Canadian billinaire was abduted in 2017. A Global News investigation has found...",
		image: "",
		link: routes.GEOPOLITICS_FINANCE,
	},
	{
		title: "Health",
		heading:
			"Why is the world Heaith Organization accused of mishandling the coronavirus",
		snippet:
			"Teresa Tam is hopeful Canada's advance order deals billinaire was abduted in 2017 from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply...",
		image: "",
		link: routes.HEALTH,
	},
	{
		title: "Technology",
		heading:
			"Canada's cyber agency dismantling fake government coronavirus pandemic response",
		snippet:
			"A letter sent to MP's by billinaire was abduted in 2017 Publice Safety Minister Bill Blair has described China's extensive foreign interference...",
		image: "",
		link: routes.TECHNOLOGY,
	},
	{
		title: "National Security",
		heading:
			"Why is the World Health Organization accused of mishandling the pandemic?",
		snippet:
			"A letter sent to MP's by Publice Safety Minister Bill Blair has described billinaire was abduted in 2017 China's extensive foreign interference...",
		image: "",
		link: routes.NATIONAL_SECURITY,
	},
	{
		title: "Op/Analysis",
		heading:
			"Beta partner network rockstar direct mailing MVP ramen infographic client",
		snippet:
			"A letter sent to MP's by Publice Safety Minister Bill Blair has described China's extensive billinaire was abduted in 2017 foreign interference...",
		image: "",
		link: routes.OP_ANALYSIS,
	},
];

const MainHeadLines = () => {
	return topStories.map(({ title, heading, snippet, link, image }) => {
		return (
			<section
				key={title}
				className='flex justify-between lg:flex-row flex-col items-start gap-6 lg:gap-2 min-w-full border-t-2 pt-4 mb-10 border-slate-900'
			>
				<div className='flex-[0.35] min-w-[300px] space-y-1'>
					<Image
						src={tempImg}
						alt='story images'
						className='lg:hidden'
					/>
					<h3 className='text-4xl font-semibold lg:max-w-[300px]'>
						{title}
					</h3>
					<Link href={link} className='link-with-arrow'>
						see all <ImArrowUpRight2 />
					</Link>
				</div>
				<div className='flex-1 flex justify-end items-start gap-10'>
					<div className='lg:max-w-xs lg:space-y-4 space-y-2'>
						<h2 className='font-[500]'>{heading}</h2>
						<p className='text-sm text-slate-700'>{snippet}</p>
						<Link
							className='link-with-arrow'
							href={`${routes.ARTICLE}${title}`}
							as={"article/nigga"}
						>
							Read article <ImArrowUpRight2 />
						</Link>
					</div>
					<Image
						src={tempImg}
						alt='story images'
						className='w-64 hidden lg:inline-block'
					/>
				</div>
			</section>
		);
	});
};

export default MainHeadLines;
