import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Components/i18n.tsx";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import i18n from "./Components/i18n.tsx";
import { AppThemeProvider } from "./theme";

const presistor = persistStore(store);



ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>

		<Provider store={store}>
			<PersistGate loading={null} persistor={presistor}>
				<I18nextProvider i18n={i18n}>
					<Suspense fallback={<div>Loading...</div>}>
						<AppThemeProvider>
							<App />
						</AppThemeProvider>
					</Suspense>
				</I18nextProvider>
			</PersistGate>
		</Provider>

	</React.StrictMode>
);
