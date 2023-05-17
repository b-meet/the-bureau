import AsideNews from "@/components/article/AsideNews";
import MainArticle from "@/components/article/MainArticle";
import Footer from "@/components/global/Footer";

const Article = () => {
	return (
		<article className='p-10'>
			<article className='flex gap-8 mb-6'>
				<MainArticle />
				<AsideNews />
			</article>
			<Footer />
		</article>
	);
};

export default Article;
