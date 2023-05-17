import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";

import banner from "../../assets/images/articleBanner.png";
import Footer from "@/components/global/Footer";
import TopStory from "@/components/mainTopicPage/TopStory";
import LatestStories from "@/components/mainTopicPage/LatestStories";
import Testimonial from "@/components/global/Testimonial";
import routes from "@/RouteConstant";

const index = () => {
	const data = [
		{
			title: "Why is the world Heaith Organization accused of mishandling the coronavirus",
			snippet:
				"Teresa Tam is hopeful Canada's advance order deals from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply...",
		},
		{
			title: "Suspects in alleged Markham illegal casino mansion linked to B.C. casino suspects",
			snippet:
				"Alleged criminal activities in Richmond, B.C., and Markham, Ontario have come into focus in recent weeks.",
		},
		{
			title: "MP says he was unaware of CSIS allegations against Iranian businessman when they met",
			snippet:
				"A photo posted Wednesday showed Majid Jowhari, MP for Richmond Hill, with Alireza Onghaei, who faces allegations he helped the government of Iran...",
		},
		{
			title: "Suspects in alleged Markham illegal allegations against Iranian businessman when they met",
			snippet:
				"MP for Richmond Hill, with Alireza Onghaei, who faces alleged criminal activities allegations, he helped...",
		},
	];
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
					<LatestStories />
					<section className='space-y-5 my-14'>
						{data.map(({ title, snippet }) => (
							<div className='p-5 space-y-5'>
								<h4 className='font-semibold text-2xl'>
									{title}
								</h4>

								<div className='flex justify-between'>
									<div className='space-y-4'>
										<p className='max-w-[350px] min-w-[280px]'>
											{snippet}
										</p>
										<Link
											href={`${routes.ARTICLE}${title}`}
											as={"article/nigga"}
											className='link-with-arrow'
										>
											Read Article
											<ImArrowUpRight2 />
										</Link>
									</div>
									<Image
										src={banner}
										alt='story banner'
										width={400}
										height={"auto"}
									/>
								</div>
							</div>
						))}
					</section>
					<Testimonial />
				</main>
			</article>
			<Footer />
		</>
	);
};

export default index;
