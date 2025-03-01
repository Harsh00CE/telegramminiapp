import React from 'react'

const EnergyStakingPage = () => {
    return (
        <div className="w-full flex justify-between items-center p-4 bg-gray-900 rounded-lg">
            <span>Energy Staking</span>
            <div className="flex gap-2">
                <button className="bg-yellow-500 text-black px-4 py-1 rounded">Referral Link</button>
                <button className="bg-yellow-500 text-black px-4 py-1 rounded">Upgrade</button>
            </div>
        </div>
    )
}

export default EnergyStakingPage