import { NavigationObjectType } from "../../data/data";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import "./Navigation.scss";

type NavigationType = {
	colorClass?: string;
	navigationArray?: NavigationObjectType[];
	showLanguageSelector?: boolean;
};
const Navigation = ({
	colorClass,
	navigationArray,
	showLanguageSelector,
}: NavigationType) => {
	return (
		<nav className="mla" id="navigation">
			<ul className={`navigationText fsi df aic mr1 mla lsn ${colorClass}`}>
				{navigationArray?.map((item: NavigationObjectType, index: number) => {
					return (
						<li className="bb1" key={index}>
							<a href={item.navigationAnchor}>{item.navigationLabel}</a>
						</li>
					);
				})}
				{showLanguageSelector && <LanguageSelector />}
			</ul>
		</nav>
	);
};

export default Navigation;
