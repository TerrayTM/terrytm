const contactControls = [
    {
        type: 'input',
        name: 'name',
        label: 'Name:',
        elementConfiguration: {
            type: 'text',
            placeholder: 'Name'
        },
        validation: {
            required: true
        }
    },
    {
        type: 'input',
        name: 'email',
        label: 'Email:',
        elementConfiguration: {
            type: 'text',
            placeholder: 'Email'
        },
        validation: {
            required: true,
            email: true
        }
    },
    {
        type: 'textarea',
        name: 'message',
        label: 'Message:',
        elementConfiguration: {
            placeholder: 'Message'
        },
        validation: {
            required: true,
            maxLength: 4096
        }
    }
];

export default contactControls;