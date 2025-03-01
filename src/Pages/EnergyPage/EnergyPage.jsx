import React from 'react'

const EnergyPage = () => {

  window.Telegram.WebApp.BackButton.onClick(() => {
    alert("Navigated back!");
    history.back();
  });

  return (
    <div className="w-full flex justify-between items-center p-4 bg-gray-900 rounded-lg">
      <span>Get Energy</span>
      <div className="flex gap-2">
        
        Get Energy
      </div>
    </div>
  )
}

export default EnergyPage