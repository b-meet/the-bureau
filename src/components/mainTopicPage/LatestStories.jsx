import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

import CreditLine from "../global/CreditLine";
import routes from "@/RouteConstant";

const data = [
	{
		author: "John Cooper",
		title: "Why is the world Heaith Organization accused of mishandling the coronavirus",
		snippet:
			"Teresa Tam is hopeful Canada's advance order deals from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply...",
	},
	{
		author: "William Austin",
		title: "Suspects in alleged Markham illegal casino mansion linked to B.C. casino suspects",
		snippet:
			"Alleged criminal activities in Richmond, B.C., and Markham, Ontario have come into focus in recent weeks.",
	},
	{
		author: "Jean Hofstader",
		title: "MP says he was unaware of CSIS allegations against Iranian businessman when they met",
		snippet:
			"A photo posted Wednesday showed Majid Jowhari, MP for Richmond Hill, with Alireza Onghaei, who faces allegations he helped the government of Iran...",
	},
	{
		author: "Maria Alaba",
		title: "Suspects in alleged Markham illegal allegations against Iranian businessman when they met",
		snippet:
			"MP for Richmond Hill, with Alireza Onghaei, who faces alleged criminal activities allegations, he helped...",
	},
];

const LatestStories = () => {
	return (
		<section className='border-t-2 border-b-2 border-slate-900 py-6'>
			<h3 className='text-xl font-semibold mb-6'>
				Latest Op/Analysis articles
			</h3>
			<div className='flex gap-5 flex-wrap justify-center'>
				{data.map(({ author, title, snippet }) => (
					<div className='flex-1 space-y-2 min-w-[280px] max-w-[350px]'>
						<CreditLine author={author} isHero={false} />
						<h4 className='font-semibold'>{title}</h4>
						<p className='text-[15px] text-slate-700'>{snippet}</p>
						<Link
							href={`${routes.ARTICLE}${title}`}
							as={"article/nigga"}
							className='link-with-arrow'
						>
							Read Article
							<ImArrowUpRight2 />
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default LatestStories;
