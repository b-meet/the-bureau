import { useState } from "react";
import { MdMailOutline } from "react-icons/md";

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState({});

	const validate = () => {
		let tempErr = {};
		const emailRegex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!email) {
			tempErr.email = "please enter a email";
		} else if (!emailRegex.test(email)) {
			tempErr.email = "please enter a valid email address";
		}
		setError(tempErr);
		return Object.keys(tempErr).length <= 0;
	};

	const handleSubscribe = () => {
		if (validate()) {
			console.log("subscribed");
		}
	};

	return (
		<article className='sm:p-20 p-8 bg-slate-950 text-primary-bg-color flex flex-col gap-8 items-center'>
			<h3 className='text-3xl font-semibold text-center'>
				Subscribe to Our Newsletter
			</h3>
			<p className='text-center'>
				Engaging copy for member subscription with the CTA to enter
				email and subscribe.
			</p>
			<div className='flex items-start'>
				<div className='relative'>
					<span className='absolute top-2.5 left-2'>
						<MdMailOutline />
					</span>
					<input
						type='text'
						placeholder='Your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-64 sm:w-72 pl-7 py-2 text-xs flex flex-col bg-transparent outline-none border border-primary-bg-color'
					/>
					{error.email && (
						<span className='text-xs leading-3'>{error.email}</span>
					)}
				</div>
				<button
					onClick={handleSubscribe}
					className='py-2 px-4 text-black uppercase text-xs bg-primary-bg-color border border-primary-bg-color'
				>
					subscribe
				</button>
			</div>
		</article>
	);
};

export default Subscribe;
