import demoicon from '/src/assets/react.svg'
import building from '/src/assets/building-icon.svg'
import edit from '/src/assets/edit.svg'
import file from '/src/assets/file.svg'
import hierarchy from '/src/assets/hierarchy.svg'
import historic from '/src/assets/historic.svg'
import notification from '/src/assets/notification.svg'
import profile from '/src/assets/profile.svg'

export const menuIcons = [
    {
        path: '/enterprise',
        icon: building
    },
    {
        path: '/edit',
        icon: edit
    },
    {
        path: '/list',
        icon: hierarchy
    },
    {
        path: '/notification',
        icon: notification,
        subIcon: file
    },
    {
        path: '/historic',
        icon: historic
    },
    {
        path: '/profile',
        icon: profile
    }
]