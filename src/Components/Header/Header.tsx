import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import headerBackground from "../../assets/images/header-background.jpg";
import "./Header.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
	const { t } = useTranslation();
	const navigationObject = [
		{
			navigationAnchorId: "history",
			navigationAnchor: "#history",
			navigationLabel: `01. ${t("History")}`,
			navigationSlotComponet: "history",
		},
		{
			navigationAnchorId: "team",
			navigationAnchor: "#team",
			navigationLabel: `02. ${t("Team")}`,
			navigationSlotComponet: "climb",
		},
	];

	return (
		<>
			<header className="header df aic fdc posrelative">
				<img
					className="headerBackround w100"
					src={headerBackground}
					alt="headerBackground"
				></img>
				<div className="df paddings posabsolute w100 aic">
					<Logo />
					<Navigation
						colorClass={"cWhite"}
						navigationArray={navigationObject}
						showLanguageSelector
					/>
				</div>
				<div className="df paddings posabsolute w100 aic b0 bWhite">
					<Logo logoBorder={true} additionalText={true} cPrimary={"cPrimary"} />
					<Navigation
						colorClass={"cPrimary"}
						navigationArray={navigationObject}
						
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
