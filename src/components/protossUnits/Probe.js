import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Probe() {
  return (
    <UnitDisplay
      name='Probe'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/probe.gif"}
      alttag='Probe gif'
      type='Small Ground Unit'
      description='Basic worker unit. Can gather resources and warp in Protoss structures'

      from='Nexus'
      minerals='50'
      gas='0'
      supply='1'
      buildtime='12'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Particle Beam'
      targets='Ground'
      damage='5'
      dps='4.67'
      cooldown='1.07'
      Range='0.1'

      shield='20'
      health='20'
      armor='0(+1)'
      speed='3.94'
    />
  )
}

export default Probe