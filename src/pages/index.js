import HeroSection from "@/components/homepage/HeroSection";
import ArticleSnips from "@/components/homepage/ArticleSnips";
import MainHeadLines from "@/components/homepage/MainHeadLines";
import Subscribe from "@/components/homepage/Subscribe";
import Footer from "@/components/global/Footer";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<article className='sm:p-10 p-5'>
				<section className='flex xl:flex-row flex-col-reverse gap-8'>
					<section className='flex flex-col justify-between gap-8 xl:flex-1'>
						<MainHeadLines />
					</section>
					<section className='flex flex-wrap xl:flex-col xl:items-center max-w-max overflow-auto gap-12 xl:flex-[0.25]'>
						<ArticleSnips />
					</section>
				</section>
			</article>
			<Subscribe />
			<Footer />
		</main>
	);
}
