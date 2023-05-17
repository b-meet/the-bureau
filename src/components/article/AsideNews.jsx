import ArticleSnippet from "../homepage/ArticleSnippet";

const AsideNews = () => {
	const articleData = [
		{
			tag: "health",
			title: "Why is the world Heaith Organization accused of mishandling the coronavirus",
			snippet:
				"Teresa Tam is hopeful Canada's advance order deals from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply...",
			color: "bg-blue-500",
		},
		{
			tag: "investigations",
			title: "Suspects in alleged Markham illegal casino mansion linked to B.C. casino suspects",
			snippet:
				"Alleged criminal activities in Richmond, B.C., and Markham, Ontario have come into focus in recent weeks.",
			color: "bg-orange-500",
		},
		{
			tag: "geopolitics & finances",
			title: "MP says he was unaware of CSIS allegations against Iranian businessman when they met",
			snippet:
				"A photo posted Wednesday showed Majid Jowhari, MP for Richmond Hill, with Alireza Onghaei, who faces allegations he helped the government of Iran...",
			color: "bg-green-500",
		},
		{
			tag: "geopolitics",
			title: "Suspects in alleged Markham illegal allegations against Iranian businessman when they met",
			snippet:
				"MP for Richmond Hill, with Alireza Onghaei, who faces alleged criminal activities allegations, he helped...",
			color: "bg-yellow-500",
		},
	];

	return (
		<aside className='bg-primary-dark-bg-light rounded-lg flex-[0.3]'>
			<section>
				<h3 className='text-xl font-semibold p-2 border-b border-slate-900'>
					Breaking News
				</h3>
				{articleData.map((article) => (
					<div className='p-5 cursor-pointer hover:bg-primary-dark-bg-color'>
						<ArticleSnippet
							key={article.title}
							article={article}
							isTopStory={true}
						/>
					</div>
				))}
			</section>
			<section>
				<h3 className='text-xl font-semibold p-2 border-b border-slate-900'>
					Hot Topics
				</h3>
				{articleData.slice(1, 2).map((article) => (
					<div className='p-5 cursor-pointer hover:bg-primary-dark-bg-color'>
						<ArticleSnippet
							key={article.title}
							article={article}
							isTopStory={true}
						/>
					</div>
				))}
			</section>
			<section>
				<h3 className='text-xl font-semibold p-2 border-b border-slate-900'>
					More by author
				</h3>
				{articleData.slice(2).map((article) => (
					<div className='p-5 cursor-pointer hover:bg-primary-dark-bg-color'>
						<ArticleSnippet
							key={article.title}
							article={article}
							isTopStory={true}
						/>
					</div>
				))}
			</section>
		</aside>
	);
};

export default AsideNews;
