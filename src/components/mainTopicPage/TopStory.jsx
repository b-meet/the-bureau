import { ImArrowUpRight2 } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";

const TopStory = () => {
	return (
		<section className='flex justify-between pt-10 pb-20'>
			<div className='space-y-5'>
				<h2 className='text-2xl font-semibold max-w-xs'>
					China and Russia exploiting high-tech in "hybrid warfare"
					costs up to $100B per year in Canada
					<span>- report</span>
				</h2>
				<div className='text-xs text-slate-700 flex items-center gap-3'>
					<span>San Cooper</span>
					<span>
						<GoPrimitiveDot />
					</span>
					<span>September 23, 2022</span>
				</div>
			</div>
			<div className='flex-[0.85] max-w-[620px] space-y-5'>
				<p className=''>
					News is that important, find me Romensko hyperhyperlocal,
					Zite privacy The Weekender Knight Foundation the notional
					night cops reporter in Des Moines Gutenberg commons-based
					peer production Frontline hyperthyperhyperlocal, blog put
					the paper to bed nonprofit Tim Carmody Josh Marshall
					production.
				</p>
				<p>
					Of innocence paidContent, get me rewrite hot news doctrine
					fair use Water Lippmann natural-bom blogger SEO scoop Kindle
					Single masthead nut grat production of innocence YouTube
					newsonomics dying Like button Nick Denton
				</p>
				<button className='link-with-arrow'>
					READ ARTICLE
					<ImArrowUpRight2 />
				</button>
			</div>
		</section>
	);
};

export default TopStory;