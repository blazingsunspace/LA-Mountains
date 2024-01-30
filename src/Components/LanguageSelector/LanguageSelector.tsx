import React, { useState } from "react";
import USA from "../../assets/images/USA.svg";
import SRB from "../../assets/images/SRB.svg";
import "./LanguageSelector.scss";
import { useOutsideClick } from "./UseComponentVisible";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
	setDefaultLanguageImage,
	setDefaultLanguage,
	setChosenLanguage,
} from "../../store/reducer";
import { RootState } from "../../store/store";
const LanguageSelector = () => {
	const [languageOpened, setLanguageOpened] = useState(0);
	const [languageItemsOpened, setLanguageItemsOpened] = useState("0");
	/* const [defaultLanguage, setDefaultLanguage] = useState(USA); */

	const defaultLanguage = useSelector(
		(state: RootState) => state.reducer.defaultLanguage
	);

	const defaultLanguageImage = useSelector(
		(state: RootState) => state.reducer.defaultLanguageImage
	);
	const chosenLanguage = useSelector(
		(state: RootState) => state.reducer.chosenLanguage
	);

	const { t, i18n } = useTranslation(["home", "main"]);
	const dispatch = useDispatch();
	const onClickLanguageChange = (e: React.MouseEvent<HTMLElement>) => {
		const language = e.currentTarget.dataset.platform ?? "en-US";

		e.currentTarget.parentElement?.querySelector(".dn")?.classList.remove("dn");
		e.currentTarget.classList.add("dn");

		switch (language) {
			case "en-US":
				dispatch(setDefaultLanguageImage(USA));
				dispatch(
					setChosenLanguage({
						"en-US": "dn",
						"sr-RS": "",
					})
				);
				break;

			case "sr-RS":
				dispatch(setDefaultLanguageImage(SRB));
				dispatch(
					setChosenLanguage({
						"en-US": "",
						"sr-RS": "dn",
					})
				);
				break;
		}

		dispatch(setDefaultLanguage(language));

		i18n.changeLanguage(language); //change the language
		setLanguageOpened(0);
		setLanguageItemsOpened("");
	};
	const ref = useOutsideClick(() => {
		setLanguageOpened(0);
		setLanguageItemsOpened("");
	});

	const openLanguageSelector = (event: React.MouseEvent<HTMLElement>) => {
		setLanguageOpened(1);
		setLanguageItemsOpened("opened");
		if (event.currentTarget.parentElement?.querySelector(".languageList")) {
			if (languageOpened) {
				if (languageOpened === 0) {
					setLanguageOpened(1);
					setLanguageItemsOpened("opened");
				} else if (languageOpened === 1) {
					setLanguageOpened(0);
					setLanguageItemsOpened("");
				}
			}
		}
	};

	return (
		<div ref={ref}>
			<div className="langCont prevent-select zi1">
				<div className="lanugageMainCont" onClick={openLanguageSelector}>
					<div
						data-platform={defaultLanguage}
						data-opened={languageOpened}
						className="languageCell noselect df aic w32px"
					>
						<img
							className="w32px mainLanguageCellImage"
							src={defaultLanguageImage}
							alt=""
						/>
					</div>
				</div>
				<div className={`noselect languageList ${languageItemsOpened}`}>
					<span
						className={`languageListCell ${chosenLanguage["en-US"]}`}
						data-platform="en-US"
						onClick={onClickLanguageChange}
					>
						<img className="w32px" src={USA} alt="" />
						<span>English</span>
					</span>
					<span
						data-platform="sr-RS"
						className={`languageListCell ${chosenLanguage["sr-RS"]}`}
						onClick={onClickLanguageChange}
					>
						<img className="w32px" src={SRB} alt="" />
						<span>Serbian</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default LanguageSelector;