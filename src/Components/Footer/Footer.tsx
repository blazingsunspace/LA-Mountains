import Logo from "../Logo/Logo";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

import "./Fotter.scss";

const Footer = () => {

	return (
		<footer className="paddings">
			<div className="o0dot5 df aic">
				<Logo additionalText cPrimary={"cWhite"} />
				<em className="mla cWhite">COPYRIGHT 2016. ALL RIGHTS RESERVED.</em>
			</div>
			<ThemeSwitch />
		</footer>
	);
};

export default Footer;
