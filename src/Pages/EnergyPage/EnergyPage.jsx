import React from 'react'

const EnergyPage = () => {

  window.Telegram.WebApp.BackButton.onClick(() => {
    alert("Navigated back!");
    history.back();
  });

  return (
    <div>Get EnergyPage</div>
  )
}

export default EnergyPage