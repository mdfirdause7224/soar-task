import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import RecentTransactions from '../components/RecentTransactions';

export default {
  title: 'Components/RecentTransactions',
  component: RecentTransactions,
  argTypes: {
    date: { control: 'text' },
    transaction: { control: 'boolean' },
    message: { control: 'text' },
    amount: { control: 'number' },
    image: { control: 'text' }
  }
} as Meta;

type RecentTransactionsProps = React.ComponentProps<typeof RecentTransactions>;

const Template: StoryFn<RecentTransactionsProps> = (args) => <RecentTransactions {...args} />;

export const PositiveTransaction = Template.bind({});
PositiveTransaction.args = {
  date: '02 january 2023',
  transaction: true,
  message: 'Payment Received',
  amount: 100,
  image: 'https://avatar.iran.liara.run/public?4'
};

export const NegativeTransaction = Template.bind({});
NegativeTransaction.args = {
  date: '26 january 2023',
  transaction: false,
  message: 'Purchase at Store',
  amount: 50,
  image: 'https://avatar.iran.liara.run/public?6'
};
