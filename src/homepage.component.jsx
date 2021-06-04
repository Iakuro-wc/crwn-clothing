import React from 'react'
import Directory from './directory.component'

const Homepage = () => {
    const stock = [
        {
            id: 1,
            title: 'HATS'
        },
        {
            id: 2,
            title: 'SHOES'
        },
        {
            id: 3,
            title: 'JACKETS'
        },
        {
            id: 4,
            title: 'WOMENS'
        },
        {
            id: 5,
            title: 'MENS'
        }
    ]
    return (
        <div>
            {stock.map(item => {
                return <Directory key={item.id} title={item.title} />
            })}
        </div>
    )
}

export default Homepage
