import { fn } from 'storybook/test'
import Alert from './Alert'

export default {
    title: 'Atoms/Alert',
    component: Alert,
    parameters: {
        layout: 'centered'
    },
    tags: ["autodocs"],
    args: {
        onClose: fn()
    }
}


export const Info = {
    args: {
        variant: 'info',
        title: 'Info Alert',
        children: 'This is some very important information',

    }
}

export const Success = {
    args: {
        variant: 'success',
        title: 'Route saved',
        children: 'Your game plan is tucked away and ready when you are.'
    }
}

export const Warning = {
    args: {
        variant: 'warning',
        title: 'Long drive day', 
        children: 'One of your must visit spots is too far outside the route.'
    }
}