import logoImage from "../../assets/images/logo.svg";

import "./Logo.scss";

type LogoType = {
	additionalText?: boolean;
	cPrimary?: string;
	logoBorder?: boolean;
};

const Logo = ({ additionalText, cPrimary, logoBorder }: LogoType) => {
	return (
		<div className="df g1">
			<img
				src={logoImage}
				className={`logo br50 ${logoBorder ? "frame" : ""}`}
				alt="Introducion page"
			/>
			{additionalText && (
				<div className={`additionalText fs25 lh1 df fdc jcc bebasRegular ${cPrimary}`}>
					<p className="m0">LOSANGELES</p>
					<p className="m0">MOUNTAINS</p>
				</div>
			)}
		</div>
	);
};

export default Logo;
