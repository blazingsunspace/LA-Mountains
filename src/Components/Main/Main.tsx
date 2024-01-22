import "./Main.scss";

import { NavigationObjectType, navigationObject } from "../../data/data.ts";

import Slot from "../Slot/Slot.tsx";
const Main = () => {
	return (
		<main className="accordion accordion--radio">
			{navigationObject.map((item: NavigationObjectType, index: number) => {
				return (
					<div className="tab" key={index}>
						<input type="checkbox" name={`accordion`} id={`rd${index + 1}`} />

						<label htmlFor={`rd${index + 1}`} className="tab__label">
							{item.navigationLabel}
						</label>

						<div className="tab__content">
							<section id={item.navigationAnchorId}>
								<Slot navigationSlotComponet={item.navigationSlotComponet} />
							</section>
						</div>
					</div>
				);
			})}
		</main>
	);
};

export default Main;
