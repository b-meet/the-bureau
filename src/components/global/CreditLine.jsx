import { GoPrimitiveDot } from "react-icons/go";

const CreditLine = ({ author, isHero }) => {
	return (
		<div
			className={`text-xs ${
				isHero ? "text-slate-300" : "text-slate-800"
			} flex items-center gap-3 max-w-max`}
		>
			<span>{author}</span>
			<span>
				<GoPrimitiveDot />
			</span>
			<span>September 23, 2022</span>
		</div>
	);
};

export default CreditLine;
