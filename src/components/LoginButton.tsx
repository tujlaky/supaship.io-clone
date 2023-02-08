import clsx from "clsx";

type LoginButtonProperties = React.PropsWithChildren<
	React.DetailedHTMLProps<
		React.HtmlHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
>;

export function LoginButton({ children, ...props }: LoginButtonProperties) {
	return (
		<button type="button" {...props} className={clsx(props.className)}>
			{children}
		</button>
	);
}
