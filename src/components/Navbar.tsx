import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

type NavbarProperties = React.PropsWithChildren<
	React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>;

export function Navbar({ children, ...props }: NavbarProperties) {
	return (
		<nav {...props} className={clsx("bg-white p-5 flex flex-row justify-between", props.className)}>
			<FontAwesomeIcon icon={faDragon} />
			<div>{children}</div>
		</nav>
	);
}
