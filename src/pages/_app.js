import { Provider } from "react-redux";

import MainLayout from "@/components/global/MainLayout";
import store from "@/redux/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</Provider>
	);
}
