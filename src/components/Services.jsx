import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
const servicesdata = [
  {
    title: 'Smart Water Meter',
    description:
      'Our smart water meter delivers accurate, real-time measurement of water consumption. It enables continuous monitoring, reduces manual readings, and provides reliable data to improve efficiency and transparency in water usage.',
    icon: assets.ads_icon,
  },
  {
    title: 'Remote Water Valve',
    description:
      'The remote water valve allows secure control of water flow using Wi-Fi or 4G connectivity. Utilities and users can operate, shut off, or regulate water supply remotely, improving response time, safety, and operational control.',
    icon: assets.content_icon,
  },
  {
    title: 'Water Purity Sensors',
    description:
      'Our real-time water purity sensors continuously monitor key quality parameters. They provide instant alerts and live data to ensure safe water standards, early contamination detection, and improved public health protection.',
    icon: assets.marketing_icon,
  },
  {
    title: 'Industrial Data Logger',
    description:
      'Designed for industrial environments, our data logger captures and stores critical water and system data with high reliability. It enables long-term analysis, compliance reporting, and smarter operational decision-making.',
    icon: assets.social_icon,
  },
]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    id='service' className='relative flex flex-col items-center
    gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70-z-1
       dark:hidden'/>

       <Title title='How can we help?' desc='from strategy to execution, we craft
       digital solutions for water supply management'/>

     <div className='flex flex-col md:grid grid grid-cols-2'>
    {servicesdata.map((service, index) => (
      <ServiceCard key={index} service={service} index={index} />
    ))}
     </div>
    </motion.div>
  )
}

export default Services
