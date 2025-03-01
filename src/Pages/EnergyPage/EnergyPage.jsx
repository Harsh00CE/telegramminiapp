import { backButton, init } from '@telegram-apps/sdk';
import React from 'react'
import { BackButton } from '../../utils/BackButton';

const EnergyPage = () => {

  backButton.mount();

  return (

    <div>
      <BackButton />
      Get EnergyPage</div>
  )
}

export default EnergyPage