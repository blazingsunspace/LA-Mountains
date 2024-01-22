
import './DropCap.scss'



type DropCapType = {
	className?: string,
	dropCapNumber?: string,
	dropCapDecoraterLabel?: string
}

const DropCap = ({ className, dropCapNumber, dropCapDecoraterLabel }: DropCapType) => {
	return (
		<div className={`dropCapContainer ${className}`}>
			<p className="dropCap">{dropCapNumber}.</p>
			<p className="dropCapDecorater oswaldBold">{dropCapDecoraterLabel}</p>
		</div>
	);
};

export default DropCap;
