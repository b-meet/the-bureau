import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useDispatch } from "react-redux";

import { utilitySliceActions } from "@/redux/slice/utilitySlice";

const Header = () => {
	const navbarItems = [
		{ title: "investigations", link: "investigations" },
		{ title: "geopolitics and finance", link: "geopolitics-finance" },
		{ title: "Health", link: "health" },
		{ title: "Logo", link: "/" },
		{ title: "technology", link: "technology" },
		{ title: "national security", link: "national-security" },
		{ title: "Op/analysis", link: "op-analysis" },
	];

	const dispatch = useDispatch();
	const navRef = useRef();

	//handling the navbar transitions on scroll
	const callback = () => {
		if (window.scrollY > 70) {
			navRef.current.classList.add(
				"sticky",
				"-top-10",
				"z-10",
				"translate-y-10",
				"transition-all",
				"duration-600"
			);
		} else {
			navRef.current.classList.remove(
				"stickt",
				"-top-10",
				"z-10",
				"translate-y-10",
				"transition-all",
				"duration-600"
			);
		}
	};
	useEffect(() => {
		addEventListener("scroll", callback);
		return () => {
			removeEventListener("scroll", callback);
		};
	}, []);

	//handles the search
	const handleSearch = () => {
		dispatch(utilitySliceActions.toggleSearchModal());
	};

	return (
		<nav
			className='bg-primary-bg-color flex justify-between items-center px-12 py-3 shadow-md'
			ref={navRef}
		>
			<button onClick={handleSearch} className='font-semibold'>
				<BsSearch />
			</button>
			<ul className='flex gap-10'>
				{navbarItems.map(({ title, link }) => (
					<Link
						key={title}
						href={link}
						className='uppercase py-3 text-xs font-semibold text-gray-500 hover:text-black header-link'
					>
						{title}
					</Link>
				))}
			</ul>
			<span className='font-semibold text-xl'>
				<HiOutlineBars3BottomRight />
			</span>
		</nav>
	);
};

export default Header;
