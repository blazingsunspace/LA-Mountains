import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import headerBackground from "../../assets/images/header-background.jpg";
import "./Header.scss";
import { navigationObject } from "../../data/data";
const Header = () => {
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
						showLanguageSelector
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
