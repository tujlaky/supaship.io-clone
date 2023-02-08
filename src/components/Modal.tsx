import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";

type ModalProperties = {
	show: boolean;
	onClose: () => void;
	title: string;
} & React.PropsWithChildren<
	React.DetailedHTMLProps<
		React.HtmlHTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>
>;

export function Modal({
	children,
	onClose,
	show,
	title,
	...props
}: ModalProperties) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		setIsOpen(show);

		show
			? document.body.classList.add("overflow-hidden")
			: document.body.classList.remove("overflow-hidden");
	}, [show]);

	return isOpen ? (
		<div className="absolute top-0 left-0 bg-slate-600 w-full h-full z-50 flex justify-center items-start">
			<div
				{...props}
				className={clsx(
					"bg-white p-5 rounded-sm drop-shadow-sm max-w-md w-full mt-20",
					props.className,
				)}
			>
				<div className="w-100 flex justify-between items-center">
					<h2 className="text-xl font-semibold">{title}</h2>
					<FontAwesomeIcon
						className="cursor-pointer"
						onClick={onClose}
						icon={faTimes}
					/>
				</div>

				{children}
			</div>
		</div>
	) : null;
}
