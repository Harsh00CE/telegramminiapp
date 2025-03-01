import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (


        <div className="mt-6 grid grid-cols-4 gap-2 w-full max-w-sm">
            <Link to="mybank" className="bg-gray-700 p-2 rounded">My Bank</Link>
            <Link to="myteam" className="bg-gray-700 p-2 rounded">My Team</Link>
            <Link to="energystaking" className="bg-gray-700 p-2 rounded">Energy Staking</Link>
            <Link to="energy" className="bg-yellow-500 text-black p-2 rounded">Get Energy</Link>
        </div>

    )
}

export default Footer