import A01Button from '.';

export default {
	title: 'Atoms/A01Button',
	component: A01Button,
};

// eslint-disable-next-line react/prop-types
const Template = ({label, ...htmlAttributes}) => (
	<A01Button
		{...htmlAttributes}
	>
		{label}
	</A01Button>
);

export const Default = Template.bind({});
Default.args = {
	label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
	isPrimary: true,
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	isSecondary: true,
	label: 'Button',
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
	isPrimary: true,
	label: 'Button',
	className: 'rounded-full w-full',
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
	label: 'Button',
};
