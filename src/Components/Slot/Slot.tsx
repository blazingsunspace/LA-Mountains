
import History from "../History/History";
import Climb from "../Climb/Climb";
type navigationSlotComponetType = {
	navigationSlotComponet: string;
}

const Slot = ({ navigationSlotComponet }: navigationSlotComponetType) => {


	return (

		navigationSlotComponet === 'history' ? <History /> : <Climb />

	);
};

export default Slot;
