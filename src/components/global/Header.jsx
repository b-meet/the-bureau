import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

import { utilitySliceActions } from "@/redux/slice/utilitySlice";
import SearchModal from "../modals/homepage/SearchModal";
import routes from "@/RouteConstant";

const Header = () => {
	const navbarItems = [
		{ title: "investigations", link: routes.INVESTIGATION },
		{ title: "geopolitics and finance", link: routes.GEOPOLITICS_FINANCE },
		{ title: "Health", link: routes.HEALTH },
		{ title: "Logo", link: "/" },
		{ title: "technology", link: routes.TECHNOLOGY },
		{ title: "national security", link: routes.NATIONAL_SECURITY },
		{ title: "Op/analysis", link: routes.OP_ANALYSIS },
	];
	const { isSearchModalOpen } = useSelector((state) => state.utils);
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
			{isSearchModalOpen && <SearchModal />}
		</nav>
	);
};

export default Header;
