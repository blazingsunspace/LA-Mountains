
import "./Mountain.scss";
import Schedule from "../Schedule/Schedule";
export type DateArrayType = {
	date: string[];
};

export type DateType = {
	date: string[];
};

export type MountainType = {
	image?: string;
	schedule: DateType[];
};

type MauntainMainType = {
	mauntingInfo: MountainType;
};

const Mountain = ({ mauntingInfo }: MauntainMainType) => {
	return (
		<div
			style={{ backgroundImage: `url(${mauntingInfo.image})` }}
			className="w100 minH600px mountainBackground paddings"
		>
			<Schedule schedule={mauntingInfo.schedule} />
		</div>
	);
};

export default Mountain;
