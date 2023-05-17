import { useSelector } from "react-redux";
import Header from "./Header";
import SearchModal from "../modals/homepage/SearchModal";

const MainLayout = ({ children }) => {
	const { isSearchModalOpen } = useSelector((state) => state.utils);

	return (
		<>
			<Header />
			{isSearchModalOpen && <SearchModal />}
			{children}
		</>
	);
};

export default MainLayout;
