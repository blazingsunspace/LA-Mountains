import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import topPart from "../../assets/images/topPart.png";
import bottomPart from "../../assets/images/bottomPart.png";

import "./Header.scss";
import { useTranslation } from "react-i18next";

import { Container } from "../../theme";

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
				<h1 className="mainTitle bebasRegular hero parallax__bg2">
					<p className="cBlack m0 m0 firstParagrafHeader">LOSANGELES</p> <br />
					<p className="cPrimaryDark m0 gradient-text ">MOUNTAINS</p>
				</h1>
				<img src={bottomPart} alt="" className="zi10 secondHeaderBackground " />

				<div className="snow parallax__dust zi90"></div>

				<div className="df paddings posabsolute w100 aic zi100">
					<Logo />
					<Navigation
						colorClass={"cWhite"}
						navigationArray={navigationObject}
						showLanguageSelector
					/>
				</div>
				<Container className="df paddings posabsolute w100 aic b0 zi100">
					<Logo logoBorder={true} additionalText={true} cPrimary={"cPrimary"} />
					<Navigation
						colorClass={"cPrimary"}
						navigationArray={navigationObject}
						useTheme
					/>


				</Container>



			</header>
		</>
	);
};

export default Header;
