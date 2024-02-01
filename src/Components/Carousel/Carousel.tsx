import "./Carousel.scss";
import { CarouselBackground } from "../../theme";
export type CarouselType = {
	imageArray?: string[];
};

const Carousel = ({ imageArray }: CarouselType) => {
	const scroolToImage = (event: React.MouseEvent<HTMLElement>) => {
		const element = event.currentTarget;
		element.parentElement
			?.querySelector(".thumbsDiv .o1")
			?.classList.remove("o1");
		element.classList.add("o1"); //
		if (element.parentElement?.parentElement && element.dataset.key) {
			const slider: HTMLElement | null =
				element.parentElement.parentElement.querySelector(".slides");
			const imageWidth: number | undefined = slider?.children[0].clientWidth;

			const letft = (imageWidth ?? 0) * parseInt(element.dataset.key);

			slider?.scroll({
				top: 0,
				left: letft,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<CarouselBackground className="historyBottomDiv paddings df fdc mb0">
				<div className="slider pt1">
					<div className="slides">
						{imageArray?.map((image, index) => {
							return (
								<img
									key={index}
									src={image}
									alt="Cat on red background"
									className="slide"
									id={"image-" + (index + 1)}
								/>
							);
						})}
					</div>
				</div>
				<div className="thumbsDiv df w100 jcc g0dot5 p1">
					{imageArray?.map((_image, index) => {
						return (
							<a
								onClick={scroolToImage}
								data-key={index}
								key={index}
								className={`o0dot7 prevent-select ${index === 0 ? "o1" : ""}`}
							></a>
						);
					})}
				</div>
			</CarouselBackground>
		</>
	);
};

export default Carousel;
