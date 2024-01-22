import Mountain from "../Mountain/Mountain";
import "./Tabs.scss";

import { useState } from "react";
import { TabItemsType } from "../../data/data";

const Tabs = ({ tabItems }: TabItemsType) => {
	const [componentLoaded, setComponentLoaded] = useState(0);

	const setActiveTab = (currentTarget: HTMLElement) => {
		currentTarget.parentElement
			?.getElementsByClassName("active")[0]
			.classList.remove("active");
		currentTarget.classList.add("active");
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setActiveTab(event.currentTarget);
		setComponentLoaded(parseInt(event.currentTarget.dataset.index ?? "0"));
	};

	return (
		<>
			<div className="tabs df paddings bPrimary pt0 pb0">
				{tabItems.tablist.map((item: string, index: number) => {
					return (
						<div
							key={index}
							className={`ttu p1 tabItem ${index === 0 ? "active" : ""}`}
							data-index={index}
							onClick={handleClick}
						>
							{item}
						</div>
					);
				})}
			</div>
			<Mountain
				mauntingInfo={{
					image: tabItems.tabPanels[componentLoaded].image,
					schedule: tabItems.tabPanels[componentLoaded].schedule,
				}}
			/>
		</>
	);
};

export default Tabs;
