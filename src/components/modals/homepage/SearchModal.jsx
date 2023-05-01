import { utilitySliceActions } from "@/redux/slice/utilitySlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchModal = () => {
	const { isSearchTag, isSearchModalOpen } = useSelector(
		(state) => state.utils
	);
	const dispatch = useDispatch();
	const modalRef = useRef("");

	//opening of modal
	const handleSearchToggle = () => {
		dispatch(utilitySliceActions.toggleSearchTag());
	};

	//close modal & stop scroll on click outside
	const handleModalClose = (e) => {
		if (e.target === modalRef.current && isSearchModalOpen) {
			dispatch(utilitySliceActions.toggleSearchModal());
		}
		document.body.style.overflow = "visible";
	};

	useEffect(() => {
		if (isSearchModalOpen) {
			document.body.style.overflow = "hidden";
		}
	}, [isSearchModalOpen]);

	return (
		<div
			onClick={handleModalClose}
			ref={modalRef}
			className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'
		>
			<article className='bg-primary-bg-color min-w-[370px] w-[40%] max-w-lg p-10 rounded-3xl space-y-3 relative'>
				<input
					type='search'
					placeholder='Search by topic or tag...'
					className='w-full bg-transparent border-b-2 border-gray-500 outline-none focus:border-black'
				/>
				<section className='bg-gray-400 p-1 rounded-lg flex justify-around gap-1'>
					<button
						onClick={handleSearchToggle}
						className={`${
							isSearchTag ? "bg-primary-bg-color" : ""
						} flex-1 p-1.5 rounded-lg`}
					>
						Tags
					</button>
					<button
						onClick={handleSearchToggle}
						className={`${
							isSearchTag ? "" : "bg-primary-bg-color"
						} flex-1 p-1.5 rounded-lg`}
					>
						Topic
					</button>
				</section>
				<section>
					{isSearchTag ? (
						<ul className='space-y-1 child:px-2 child:rounded-lg child:py-1.5 child:bg-primary-dark-bg-color child:cursor-pointer child-hover:bg-[#d7ccc2]'>
							<li>tag1</li>
							<li>tag2</li>
							<li>tag3</li>
							<li>tag4</li>
						</ul>
					) : (
						<ul className='space-y-1 child:px-2 child:rounded-lg child:py-1.5 child:bg-primary-dark-bg-color child:cursor-pointer child-hover:bg-[#d7ccc2]'>
							<li>topic1</li>
							<li>topic2</li>
							<li>topic3</li>
							<li>topic4</li>
						</ul>
					)}
					{/* <kbd className='key absolute bottom-3 left-3'>esc</kbd> */}
				</section>
			</article>
		</div>
	);
};

export default SearchModal;
