import Link from "next/link";
import routes from "@/RouteConstant";

const Footer = () => {
	return (
		<footer className='flex justify-between p-10 border-t border-slate-900'>
			<section className='flex-1 space-y-5'>
				<h1>Logo</h1>
				<p className='w-[65%] max-w-[350px]'>
					The Paper produces innovative and essential investigative
					journalism, opinios and analysis. Our mission: Truth above
					all. The world's best reporting.
				</p>
				<div className='flex flex-col'>
					<a href=''>+91 9879654800</a>
					<a href=''>info@thepaper.com</a>
				</div>
				<p className='text-slate-400 text-xs'>
					2023 The paper - All Right Reserved
				</p>
			</section>
			<section className='flex-[1.5] flex justify-around'>
				<div className='space-y-2'>
					<h5 className='font-semibold'>Categories</h5>
					<ul className='space-y-3 text-gray-500 child:cursor-pointer child:max-w-max child-hover:text-black'>
						<li className='footer-link'>
							<Link href={routes.INVESTIGATION}>
								Investigations
							</Link>
						</li>
						<li className='footer-link'>
							<Link href={routes.GEOPOLITICS_FINANCE}>
								Geopolitics & Finance
							</Link>
						</li>
						<li className='footer-link'>
							<Link href={routes.HEALTH}>Health</Link>
						</li>
						<li className='footer-link'>
							<Link href={routes.TECHNOLOGY}>Technology</Link>
						</li>
						<li className='footer-link'>
							<Link href={routes.NATIONAL_SECURITY}>
								National Security
							</Link>
						</li>
						<li className='footer-link'>
							<Link href={routes.OP_ANALYSIS}>Op/Analysis</Link>
						</li>
					</ul>
				</div>
				<div className='space-y-2'>
					<h5 className='font-semibold'>About</h5>
					<ul className='space-y-3 text-gray-500 child:cursor-pointer child:max-w-max child-hover:text-black'>
						<li className='footer-link'>
							<Link href={routes.ABOUT}>About the paper</Link>
						</li>
						<li className='footer-link'>Contact</li>
					</ul>
				</div>
				<div className='space-y-2'>
					<h5 className='font-semibold'>Follow us</h5>
					<ul className='space-y-3 text-gray-500 child:cursor-pointer child:max-w-max child-hover:text-black'>
						<li className='footer-link'>Twitter</li>
						<li className='footer-link'>Facebook</li>
						<li className='footer-link'>Instagram</li>
					</ul>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
