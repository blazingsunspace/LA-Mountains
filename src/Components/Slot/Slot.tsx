import React, { Suspense } from "react";

type navigationSlotComponetType = {
	navigationSlotComponet: string;
};

const Slot = ({ navigationSlotComponet }: navigationSlotComponetType) => {

	const LazyComponent = React.lazy(() => import(/* @vite-ignore */navigationSlotComponet));
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyComponent />
			</Suspense>
		</div>
	);
};

export default Slot;
