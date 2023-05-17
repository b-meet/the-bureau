import Image from "next/image";
import React from "react";

import hero from "../../../assets/images/hero.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "@/RouteConstant";

const Login = () => {
	const route = useRouter();
	const handleLogin = () => {
		route.push(routes.ADMIN);
	};

	return (
		<>
			<section className='text-gray-600 relative'>
				<div className='absolute inset-0 bg-gray-300 min-h-screen'>
					<Image
						src={hero}
						alt='design art for the paper login'
						className='max-h-screen min-h-screen object-cover'
						style={{
							filter: "grayscale(10%)",
						}}
					/>
				</div>
				<div className='flex justify-end items-center min-h-screen max-w-[90%] m-auto'>
					<div className='bg-white rounded-lg p-6 flex flex-col relative z-10 shadow-md max-w-[350px]'>
						<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
							Login as Admin
						</h2>
						<p className='leading-relaxed mb-5 text-gray-600'>
							Be a proud part of The paper
						</p>
						<div className='relative mb-4'>
							<label
								htmlFor='email'
								className='leading-7 text-sm text-gray-600'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							/>
						</div>
						<div className='relative mb-4'>
							<label
								htmlFor='message'
								className='leading-7 text-sm text-gray-600'
							>
								Password
							</label>
							<input
								type='password'
								id='password'
								name='password'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							/>
						</div>
						<button
							onClick={handleLogin}
							className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
						>
							Login
						</button>
						<p className='text-xs text-gray-500 mt-3'>
							Don't have the login cerdentials? Please{" "}
							<Link href={""} className='text-blue-400 underline'>
								contact the team
							</Link>{" "}
							to connect with the paper
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
