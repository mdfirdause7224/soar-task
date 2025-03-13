import { Meta, StoryFn } from '@storybook/react'
import Transfer from '../components/Transfer'

export default {
  title: 'Components/Transfer',
  component: Transfer,
  argTypes: {
    name: { control: 'text' },
    title: { control: 'text' },
    img: { control: 'text' }
  }
} as Meta

const Template: StoryFn = (args) => <Transfer name={''} title={''} img={''} {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'John Doe',
  title: 'Software Engineer',
  img: 'https://via.placeholder.com/80'
}

export const CustomUser = Template.bind({})
CustomUser.args = {
  name: 'Jane Smith',
  title: 'Product Manager',
  img: 'https://via.placeholder.com/80'
}
