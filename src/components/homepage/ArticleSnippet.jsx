import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

import routes from "@/RouteConstant";

const ArticleSnippet = ({ article, isTopStory }) => {
	const { color, tag, title, snippet } = article;

	return (
		<div className='px-6 min-w-[250px] flex flex-col gap-2 items-start'>
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
		</div>
	);
};

export default ArticleSnippet;
