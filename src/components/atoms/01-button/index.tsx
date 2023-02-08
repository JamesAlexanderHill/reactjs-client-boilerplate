import {forwardRef} from 'react';
import classNames from 'classnames/bind';

type A01ButtonProps = {
	/** HtmlAttributes */
	[x: string]: any; // HtmlAttributes
	/** Should have the primary styling */
	isPrimary: boolean;
	/** Should have the secondary styling, primary takes precidence */
	isSecondary: boolean;
	/** Should display the button as disabled */
	isDisabled: boolean;
	/** Elements to be rendered inside the button */
	children: React.ReactNode;
	/** CSS classes */
	className: string;
};
type Ref = HTMLButtonElement;

const tailwindStyleMap = {
	base: 'inline-flex items-center justify-center rounded border border-gray-300 bg-white text-gray-700 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500',
	primary: 'border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700',
	secondary: 'border-transparent bg-indigo-100 text-indigo-700 shadow-none hover:bg-indigo-200',
};

const tailwindClassNames = classNames.bind(tailwindStyleMap);

const A01Button = forwardRef<Ref, A01ButtonProps>(({
	isPrimary,
	isSecondary,
	isDisabled,
	children,
	className,
	...htmlAttributes
}, ref) => (
	<button
		{...htmlAttributes}
		ref={ref}
		className={tailwindClassNames(
			'A01Button',
			{
				base: true,
				primary: isPrimary,
				secondary: isSecondary,
			},
			className, // Any overrides eg. 'rounded-full' or 'w-full'
		)}
		disabled={isDisabled}
	>
		{children}
	</button>
));
A01Button.displayName = 'A01Button';

export default A01Button;
