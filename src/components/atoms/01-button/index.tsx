import { forwardRef } from "react";
import classNames from "classnames/bind";

interface A01ButtonProps {
	/** Should have the primary styling */
	primary: boolean;
	/** Should have the secondary styling, primary takes precidence */
	secondary: boolean;
	/** Elements to be rendered inside the button */
	children: React.ReactNode;
	/** CSS classes */
	className: string;
	/** htmlAttributes */
	[x:string]: any; // htmlAttributes
};
type Ref = HTMLButtonElement;

const tailwindStyleMap = {
	base: "inline-flex items-center rounded border border-gray-300 bg-white text-gray-700 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
	primary: "border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700",
	secondary: "border-transparent bg-indigo-100 text-indigo-700 shadow-none hover:bg-indigo-200",
};

const tailwindClassNames = classNames.bind(tailwindStyleMap);

const A01Button = forwardRef<Ref, A01ButtonProps>(({
	primary,
	secondary,
	children,
	className,
	...htmlAttributes
}, ref) => (
	<button
		{...htmlAttributes}
		ref={ref}
		className={tailwindClassNames("A01Button", {
			base: true,
			primary,
			secondary,
			className, // any overides
		})}
	>
		{children}
	</button>
));
A01Button.displayName = "A01Button";

export default A01Button;
