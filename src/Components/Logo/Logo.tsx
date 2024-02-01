
import {  useSelector } from "react-redux";
import "./Logo.scss";
import { RootState } from "../../store/store";

type LogoType = {
	additionalText?: boolean;
	cPrimary?: string;
	logoBorder?: boolean;
};

const Logo = ({ additionalText, cPrimary, logoBorder }: LogoType) => {
	
	const logoImage = useSelector(
		(state: RootState) => state.reducer.logoImage
	);
	console.log('krma', logoImage)
	return (
		<div className="df g1">
			<img
				src={logoImage}
				className={`logo br50 ${logoBorder ? "frame" : ""}`}
				alt="Introducion page"
			/>
			{additionalText && (
				<div
					className={`additionalText fs25 lh1 df fdc jcc bebasRegular ${cPrimary}`}
				>
					<p className="m0">LOSANGELES</p>
					<p className="m0">MOUNTAINS</p>
				</div>
			)}
		</div>
	);
};

export default Logo;
