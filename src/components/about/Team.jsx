import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const teamData = [
	{
		image: "https://dummyimage.com/200x200",
		name: "Holden Caulfield",
		title: "UI Developer",
		description:
			"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
		links: { facebook: "", twitter: "d", instagram: "d" },
	},
	{
		image: "https://dummyimage.com/200x200",
		name: "Holden Caulfield",
		title: "UI Developer",
		description:
			"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
		links: { facebook: "d", twitter: "d", instagram: "" },
	},
	{
		image: "https://dummyimage.com/200x200",
		name: "Holden Caulfield",
		title: "UI Developer",
		description:
			"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
		links: { facebook: "d", twitter: "", instagram: "d" },
	},
	{
		image: "https://dummyimage.com/200x200",
		name: "Holden Caulfield",
		title: "UI Developer",
		description:
			"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
		links: { facebook: "d", twitter: "d", instagram: "d" },
	},
	{
		image: "https://dummyimage.com/200x200",
		name: "Holden Caulfield",
		title: "UI Developer",
		description:
			"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
		links: { facebook: "d", twitter: "d", instagram: "" },
	},
	{
		image: "https://dummyimage.com/200x200",
		name: "Holden Caulfield",
		title: "UI Developer",
		description:
			"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
		links: { facebook: "d", twitter: "", instagram: "d" },
	},
];

const Team = () => {
	return (
		<section className='text-gray-600'>
			<article className='py-12 mx-auto'>
				<header className='flex flex-col w-full mb-10'>
					<h1 className='uppercase text-xs text-slate-700'>
						OUR TEAM
					</h1>
				</header>
				<main className='flex flex-wrap'>
					{teamData.map(
						({ image, name, title, description, links }) => (
							<div className='p-4 lg:w-1/2'>
								<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
									<img
										alt='team'
										className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
										src={image}
									/>
									<div className='flex-grow sm:pl-8'>
										<h2 className='title-font font-medium text-lg text-gray-900'>
											{name}
										</h2>
										<h3 className='text-gray-500 mb-3'>
											{title}
										</h3>
										<p className='mb-4'>{description}</p>
										<span className='inline-flex text-xl'>
											{links.facebook && (
												<a className='text-gray-500'>
													<FiFacebook />
												</a>
											)}
											{links.twitter && (
												<a className='ml-2 text-gray-500'>
													<FiTwitter />
												</a>
											)}
											{links.instagram && (
												<a className='ml-2 text-gray-500'>
													<FiInstagram />
												</a>
											)}
										</span>
									</div>
								</div>
							</div>
						)
					)}
				</main>
			</article>
		</section>
	);
};

export default Team;
