import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

import { utilitySliceActions } from "@/redux/slice/utilitySlice";
import routes from "@/RouteConstant";
import { useRouter } from "next/router";

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
	const dispatch = useDispatch();
	const { isHeaderDropdownOpen } = useSelector((state) => state.utils);
	const navRef = useRef();
	const route = useRouter();

	//handling the navbar transitions on scroll
	const callback = () => {
		if (window.scrollY > 70) {
			navRef.current.classList.add(
				"sticky",
				"-top-10",
				"translate-y-10",
				"transition-all",
				"duration-600"
			);
		} else {
			navRef.current.classList.remove(
				"stickt",
				"-top-10",
				"translate-y-10",
				"transition-all",
				"duration-600"
			);
		}
	};

	useEffect(() => {
		if (route.asPath !== routes.LOGIN) {
			addEventListener("scroll", callback);
			return () => {
				removeEventListener("scroll", callback);
			};
		}
	}, []);

	//handles the search
	const handleSearch = () => {
		dispatch(utilitySliceActions.toggleSearchModal());
	};

	const handleDropdown = () => {
		dispatch(utilitySliceActions.toggleHeaderDropdown());
	};

	return (
		route.asPath !== routes.LOGIN && (
			<nav
				className='bg-primary-bg-color flex justify-between items-center px-12 py-3 shadow-md z-40 h-[64px]'
				ref={navRef}
			>
				<button onClick={handleSearch} className='font-semibold'>
					<BsSearch />
				</button>
				<ul className='hidden lg:flex gap-8'>
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
				<Link
					href={"/"}
					className='inline-block lg:hidden uppercase py-3 text-xs font-semibold text-gray-500 hover:text-black'
				>
					Logo
				</Link>
				<div className='relative max-h-[20px]'>
					<button
						onClick={handleDropdown}
						className='font-semibold text-xl'
					>
						<HiOutlineBars3BottomRight />
					</button>
					{isHeaderDropdownOpen && (
						<div className='p-4 py-2 bg-primary-bg-color drop-shadow-2xl rounded absolute -right-[3rem] z-40'>
							{/* <Link
								href={routes.LOGIN}
								className='inline-block p-2 w-full hover:bg-primary-dark-bg-color'
							>
								Admin
							</Link> */}
							<ul className='flex lg:hidden flex-col p-2'>
								{navbarItems.map(({ title, link }) => (
									<Link
										key={title}
										href={link}
										className='uppercase py-2 px-4 text-sm font-semibold text-gray-500 hover:text-black min-w-max'
									>
										{title}
									</Link>
								))}
							</ul>
						</div>
					)}
				</div>
			</nav>
		)
	);
};

export default Header;
