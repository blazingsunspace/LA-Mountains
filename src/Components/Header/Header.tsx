import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import topPart from "../../assets/images/topPart.png";
import bottomPart from "../../assets/images/bottomPart.png";
import snow from "../../assets/images/snow.png";
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
			<header className="header df aic fdc posrelative parallax">
				<img
					className="headerBackround firstHeaderBackground w100 parallax__bg1"
					src={topPart}
					alt="headerBackground"
				></img>
				<h1 className="mainTitle bebasRegular hero">
					<p className="cBlack m0 m0 firstParagrafHeader">LOSANGELES</p> <br />
					<p className="cPrimaryDark m0 gradient-text ">MOUNTAINS</p>
				</h1>
				<img src={bottomPart} alt="" className="zi10 secondHeaderBackground " />

				<img src={snow} alt="" className="snow parallax__dust" />
				<div className="df paddings posabsolute w100 aic zi10">
					<Logo />
					<Navigation
						colorClass={"cWhite"}
						navigationArray={navigationObject}
						showLanguageSelector
					/>
				</div>
				<div className="df paddings posabsolute w100 aic b0 bWhite zi10">
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
