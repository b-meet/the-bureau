import Image from "next/image";

import banner from "../../assets/images/articleBanner.png";
import Footer from "@/components/global/Footer";
import TopStory from "@/components/mainTopicPage/TopStory";
import ArticleSnippet from "@/components/homepage/ArticleSnippet";

const index = () => {
	return (
		<>
			<article className='p-10'>
				<heade className='flex flex-col justify-center items-center space-y-5'>
					<h1 className='font-semibold text-[44px]'>Op/Analysis</h1>
					<p className='max-w-3xl text-center'>
						A brief paragraph introducing the audience about the
						investigative journalism articles they'll be able to
						find in the Op/Analysis category
					</p>
				</heade>
				<main className='mt-10 max-w-max min-w-[90%] m-auto'>
					<div className='bg-blue-300 w-full'>
						<Image
							src={banner}
							alt='topic-banner'
							priority
							className='w-full object-contain'
						/>
					</div>
					<TopStory />
					<section className='border-t-2 border-slate-900 pt-6'>
						<h3 className='text-xl font-semibold'>
							Latest Op/Analysis articles
						</h3>
						<div></div>
					</section>
				</main>
			</article>
			<Footer />
		</>
	);
};

export default index;
