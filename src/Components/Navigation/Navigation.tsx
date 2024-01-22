import { NavigationObjectType } from "../../data/data";
import "./Navigation.scss";

type NavigationType = {
	colorClass?: string;
	navigationArray?: NavigationObjectType[];
};
const Navigation = ({ colorClass, navigationArray }: NavigationType) => {
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
			</ul>
		</nav>
	);
};

export default Navigation;
