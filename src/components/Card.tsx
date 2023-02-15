import React from "react";
import clsx from "clsx";

type CardProperties = React.PropsWithChildren<
	React.DetailedHTMLProps<
		React.HtmlHTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>
>;

export function Card({ children, ...props }: CardProperties) {
	return (
		<div
			{...props}
			className={clsx(
				"bg-white rounded-sm drop-shadow-sm",
				props.className,
			)}
		>
			{children}
		</div>
	);
}
