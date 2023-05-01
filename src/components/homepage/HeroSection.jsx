import { GoPrimitiveDot } from "react-icons/go";
import Image from "next/image";

import hero from "../../assets/images/hero.jpg";
import CreditLine from "../global/CreditLine";

const HeroSection = () => {
	return (
		<article className='relative'>
			<Image
				priority
				src={hero}
				alt='hero background'
				className='max-h-[calc(100vh-200px)] object-cover'
			/>
			<section className='absolute inset-0 text-slate-50 bg-black bg-opacity-25 flex'>
				<div className='absolute bottom-10 left-10 bg-black mix-blend-lighten space-y-4'>
					<div className='text-xs text-slate-300 flex items-center gap-3'>
						<span className='tag bg-red-500'>Technology</span>
						<CreditLine />
					</div>
					<h1
						className='text-3xl max-w-[540px] font-semibold'
						style={{ textShadow: "1px 1px 10px 0 #f00" }}
					>
						Canada's cyber agency dismantling fake government
						coronavirus pandemic response websites
					</h1>
					<p className='text-xs text-slate-300'>
						Conadian intelligence agencies are fighting against the
						attempts to exploit the coronavirus pandemic.
					</p>
				</div>
			</section>
		</article>
	);
};

export default HeroSection;
