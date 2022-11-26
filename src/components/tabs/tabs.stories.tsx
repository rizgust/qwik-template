import { Meta } from '@storybook/html';
import { Tabs } from './tabs';
import { Tab } from './tab';

export default {
  title: 'Navigation / Tabs',
  argTypes: {
    boxed: { control: 'boolean' },
    isLifted: { control: 'boolean'},
    isBordered: { control: 'boolean'}
  }
} as Meta;

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

const Template = (args: any) => <Tabs {...args}>
  {tabs.map((tab, index) => {
    if (index === 1) return (<Tab isActive={true} isLifted={args.isLifted} isBordered={args.isBordered}>{tab}</Tab>);
    return (<Tab isLifted={args.isLifted} isBordered={args.isBordered}>{tab}</Tab>);
  })}
</Tabs>;

export const Default = Template.bind({});


