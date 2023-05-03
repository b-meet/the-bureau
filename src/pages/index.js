import HeroSection from "@/components/homepage/HeroSection";
import ArticleSnips from "@/components/homepage/ArticleSnips";
import MainHeadLines from "@/components/homepage/MainHeadLines";
import Subscribe from "@/components/homepage/Subscribe";
import Footer from "@/components/global/Footer";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<article className='p-10'>
				<section className='flex justify-center gap-8 flex-wrap max-w-max m-auto mb-20'>
					<ArticleSnips />
				</section>
				<MainHeadLines />
			</article>
			<Subscribe />
			<Footer />
		</main>
	);
}
