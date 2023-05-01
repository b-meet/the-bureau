import { ImArrowUpRight2 } from "react-icons/im";

const ArticleSnippet = ({ article, isTopStory }) => {
	const { color, tag, title, snippet } = article;

	return (
		<section className='min-w-[260px] w-[23%] max-w-max flex flex-col gap-2 items-start'>
			{tag && <span className={`tag ${color}`}>{tag}</span>}
			<h2 className='font-[500]'>{title}</h2>
			<p className='text-sm text-slate-700'>{snippet}</p>
			{!isTopStory && (
				<button className='link-with-arrow'>
					Read article <ImArrowUpRight2 />
				</button>
			)}
		</section>
	);
};

export default ArticleSnippet;
