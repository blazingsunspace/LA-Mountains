import { tabsContent } from "../../data/data";
import DropCap from "../DropCap/DropCap";
import Tabs from "../Tabs/Tabs";

const Climb = () => {
	return (
		<section id="team">
			<div className="df fdcres jcc g1 aic paddings pb0 pt0">
				<DropCap dropCapNumber={"02"} dropCapDecoraterLabel={"Climb"} />
				<p className="textInfo latoLight">
					Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
					quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
					tortor nec congue.
				</p>
			</div>
			<Tabs tabItems={tabsContent} />
		</section>
	);
};

export default Climb;
