import DropCap from "../DropCap/DropCap";
import "./History.scss";
import ImageSlider1 from "../../assets/images/photo-1443980995706-8d107e98e707.jpg";
import ImageSlider2 from "../../assets/images/photo-1458442310124-dde6edb43d10.jpg";
import Carousel from "../Carousel/Carousel";
import { Text, ContainerHistory } from '../../theme'
const History = () => {
	const imageArray: string[] = [
		ImageSlider1,
		ImageSlider2,
		ImageSlider1,
		ImageSlider2,
		ImageSlider1,
		ImageSlider2,
		ImageSlider1,
		ImageSlider2,
	];

	return (
		<>
			<div className="history">
				<ContainerHistory className="historyHeadingDiv paddings pt1 o0dot7 ">
					<DropCap dropCapNumber={"01"} dropCapDecoraterLabel={"History"} />
					<Text className="historyParagraph latoLight">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
						ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
						est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
						Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
						gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
						dignissim tortor nec congue.
					</Text>
				</ContainerHistory>
				<Carousel imageArray={imageArray} />
			</div>
		</>
	);
};

export default History;
