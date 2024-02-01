
import "./Schedule.scss";
import { DateArrayType, MountainType } from "../Mountain/Mountain";
import { Container } from "../../theme";

const Schedule = ({ schedule }: MountainType) => {



	const formatDate = (date: string) => {
		const d: Date = new Date(date);


		const formattedDate = new Intl.DateTimeFormat('en-UK', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		}).format(d);

		return formattedDate;
	}

	return (
		<Container className="ml1 w350px o0dot7 pt1 pb1 pl2 pr2 mt5">
			<h2 className="oswaldBold fs">SCHEDULE</h2>
			{schedule.map((item: DateArrayType, index: number) => (
				<div key={index} className="mt1 mb1">
					{item.date.map((item: string, index: number) => (
						<div key={index} className="df aic fs16">
							<div>{formatDate(item)}</div>
							<p className="mla mb0 mt0">Vestibulum viverra</p>
						</div>
					))}
				</div>
			))}
		</Container>
	);
};

export default Schedule;
