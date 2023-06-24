const Founders = () => {
	return (
		<section className='pb-16 border-b-2 border-slate-900'>
			<h2 className='uppercase text-xs text-slate-700 mb-8'>
				about the founder
			</h2>
			<section className='flex md:flex-row flex-col items-center gap-12'>
				<div className='flex flex-col gap-3'>
					<h3 className='font-semibold text-xl'>Sheldon Cooper</h3>
					<img
						src='https://dummyimage.com/200x200'
						alt='profile'
						className='rounded-full max-w-[170px]'
					/>
				</div>
				<div className='space-y-6'>
					<p>
						Sam Cooper is an award-winning Canadian journalist,
						cited as one of Canada's top investigative reporters.
						Cooper started with a North Vancouver newspaper in 2006,
						and moved up to the Vancouver Province in 2009, where he
						started to investigate political corruption and real
						estate money laundering in Vancouver. Cooper broke the
						B.C. casino money laundering and "E-Pirate" story in
						2017 at the Vancouver Sun and has now filed more than 50
						exclusive stories on the widening scandal. Since winning
						the Jack Webster Award for student journalist at Langara
						College in 2005, he has won several prizes, including a
						Canada National Newspaper Award and a Jack Webster
						Award, for his reporting with the Vancouver Province on
						abuse of seniors in B.C. care homes. Most recently,
						Cooper and his Global News reporting team won the Jack
						Webster 2019 Excellence in Feature/Enterprise reporting
						- Television for their submission: Casino Diaries
					</p>
					<p>
						Cooper holds an HBA from the University of Toronto, a
						Journalism degree from Langara College, and has
						completed several narrative writing training programs
						facilitated by his employers.
					</p>
				</div>
			</section>
		</section>
	);
};

export default Founders;
