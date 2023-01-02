import React from 'react'
import { useGlobalContext } from './context'
import {useEffect} from 'react'
import ServicesCard from './components/ServicesCard'

const Services = () => {




  const {updateServicesPage} = useGlobalContext();

  useEffect(() => updateServicesPage(),[]);

  return (
    <div>
      <ServicesCard/>
    </div>
  )
}


export default Services