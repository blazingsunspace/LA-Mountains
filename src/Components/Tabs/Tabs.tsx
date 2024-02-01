import Mountain from "../Mountain/Mountain";
import "./Tabs.scss";

import { TabItemsType } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab } from "../../store/reducer";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { TabContainer, TabItem } from '../../theme'

const Tabs = ({ tabItems }: TabItemsType) => {
	const dispatch = useDispatch();
	const selectedTab = useSelector(
		(state: RootState) => state.reducer.selectedTab
	);
	useEffect(() => {
		// Update the document title using the browser API
		console.log(selectedTab);
		const tabs = document.querySelector(".tabs");
		tabs?.querySelector(".active")?.classList.remove("active");
		tabs
			?.getElementsByClassName("tabItem")[selectedTab]?.classList.add("active");
	});
	const setActiveTab = (currentTarget: HTMLElement) => {
		currentTarget.parentElement
			?.getElementsByClassName("active")[0]
			.classList.remove("active");
		currentTarget.classList.add("active");
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setActiveTab(event.currentTarget);

		/* 	setComponentLoaded(parseInt(event.currentTarget.dataset.index ?? "0")); */
		dispatch(
			setSelectedTab(parseInt(event.currentTarget.dataset.index ?? "0"))
		);
	};

	return (
		<>
			<TabContainer className="tabs df paddings pt0 pb0">
				{tabItems.tablist.map((item: string, index: number) => {
					return (
						<TabItem
							key={index}
							className={`ttu p1 tabItem ${index === selectedTab ? "active" : ""}`}
							data-index={index}
							onClick={handleClick}
						>
							{item}
						</TabItem>
					);
				})}
			</TabContainer>
			<Mountain
				mauntingInfo={{
					image: tabItems.tabPanels[selectedTab].image,
					schedule: tabItems.tabPanels[selectedTab].schedule,
				}}
			/>
		</>
	);
};

export default Tabs;
