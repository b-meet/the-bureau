import { GoPrimitiveDot } from "react-icons/go";

const CreditLine = () => {
	return (
		<div className='text-xs text-slate-300 flex items-center gap-3'>
			<span>San Cooper</span>
			<span>
				<GoPrimitiveDot />
			</span>
			<span>September 23, 2022</span>
		</div>
	);
};

export default CreditLine;
