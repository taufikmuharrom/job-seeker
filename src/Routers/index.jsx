import React from 'react'

const Home = React.lazy(() => import('../Pages/Home'))
const DetailPage = React.lazy(() => import('../Pages/DetailPage'))

const Routers = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Home
    },
    {
        path: '/:id',
        exact: true,
        name: 'Detail Page',
        component: DetailPage
    }
]

export default Routers