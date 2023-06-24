import AboutCompany from "@/components/about/AboutCompany";
import Founders from "@/components/about/Founders";
import Team from "@/components/about/Team";
import Footer from "@/components/global/Footer";

const About = () => {
	return (
		<>
			<article className='p-5 sm:p-10 max-w-7xl m-auto'>
				<h1 className='uppercase text-xs text-slate-700'>about us</h1>
				<AboutCompany />
				<Founders />
				<Team />
			</article>
			<Footer />
		</>
	);
};

export default About;
