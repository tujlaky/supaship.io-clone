import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUp,
	faDownLong,
	faUpLong,
} from "@fortawesome/free-solid-svg-icons";

type VotesProperties = {
	votes: number;
};

export function Votes({ votes }: VotesProperties) {
	return (
		<div className="bg-slate-50 p-5 flex flex-col justify-center items-center space-y-1">
			<div>
				<FontAwesomeIcon
					className="block text-slate-400 hover:text-black cursor-pointer transition-colors"
					icon={faUpLong}
					size="sm"
				/>
			</div>
			<div className="text-lg">{votes}</div>
			<div>
				<FontAwesomeIcon
					className="block text-slate-400 hover:text-black cursor-pointer transition-colors"
					icon={faDownLong}
					size="sm"
				/>
			</div>
		</div>
	);
}
