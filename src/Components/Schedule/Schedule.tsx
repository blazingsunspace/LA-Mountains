
import "./Schedule.scss";
import { DateArrayType, MountainType } from "../Mountain/Mountain";

const Schedule = ({ schedule }: MountainType) => {
	return (
		<div className="ml1 w350px bWhite o0dot7 pt1 pb1 pl2 pr2 mt5">
			<h2 className="oswaldBold fs">SCHEDULE</h2>
			{schedule.map((item: DateArrayType, index: number) => (
				<div key={index} className="mt1 mb1">
					{item.date.map((item: string, index: number) => (
						<div key={index} className="df aic fs16">
							<div>{item}</div>
							<p className="mla mb0 mt0">Vestibulum viverra</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Schedule;
