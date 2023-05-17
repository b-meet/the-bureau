import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

import routes from "@/RouteConstant";

const ArticleSnippet = ({ article, isTopStory }) => {
	const { color, tag, title, snippet } = article;

	return (
		<section className='min-w-[260px] w-[23%] max-w-max flex flex-col gap-2 items-start'>
			{tag && <span className={`tag ${color}`}>{tag}</span>}
			<h2 className='font-[500]'>{title}</h2>
			<p className='text-sm text-slate-700'>{snippet}</p>
			{!isTopStory && (
				<Link
					className='link-with-arrow'
					href={`${routes.ARTICLE}${title}`}
					as={"article/nigga"}
				>
					Read article <ImArrowUpRight2 />
				</Link>
			)}
		</section>
	);
};

export default ArticleSnippet;
