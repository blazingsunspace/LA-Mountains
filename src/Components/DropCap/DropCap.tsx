
import './DropCap.scss'
import { DropCapP, DropCapPDecorater } from "../../theme";


type DropCapType = {
	className?: string,
	dropCapNumber?: string,
	dropCapDecoraterLabel?: string
}

const DropCap = ({ className, dropCapNumber, dropCapDecoraterLabel }: DropCapType) => {
	return (
		<div className={`dropCapContainer ${className}`}>
			<DropCapP className="dropCap">{dropCapNumber}.</DropCapP>
			<DropCapPDecorater className="dropCapDecorater oswaldBold">{dropCapDecoraterLabel}</DropCapPDecorater>
		</div>
	);
};

export default DropCap;
