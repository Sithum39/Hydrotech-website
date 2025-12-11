import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
const servicesdata = [
  {
    title: 'Water theft detection',
    description:
      'We turn bold ideas into powerful digital solutions that connect, engage, and convert audiences.',
    icon: assets.ads_icon,
  },
  {
    title: 'Water purity checking',
    description:
      'We turn bold ideas into powerful digital solutions that connect, engage, and convert audiences.',
    icon: assets.content_icon,
  },
  {
    title: 'Water billing management',
    description:
      'We turn bold ideas into powerful digital solutions that connect, engage, and convert audiences.',
    icon: assets.marketing_icon,
  },
  {
    title: 'Social Media Marketing',
    description:
      'We turn bold ideas into powerful digital solutions that connect, engage, and convert audiences.',
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
