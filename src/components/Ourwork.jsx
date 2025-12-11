import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"
const Ourwork = () => {

    const workData = [
        {
            title: 'Check water quality',
            description: 'A comprehensive digital marketing campaign that boosted client engagement by 40%.',
            image: assets.work_mobile_app
        },
        {
            title: 'Water theft detection',
            description: 'A comprehensive digital marketing campaign that boosted client engagement by 40%.',
            image: assets.work_dashboard_management
        },
        // {
        //     title: 'Fitness app promotion',
        //     description: 'A comprehensive digital marketing campaign that boosted client engagement by 40%.',
        //     image: assets.work_fitness_app
        // },
    ]
  return (
  <div id='our-work' className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700
  dark:text-white'>
     
  <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business
      forward.'/>

      <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{staggerChildren:0.2}}
      viewport={{staggerChildren: true}} 
      className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {workData.map((work, index) => (
          <motion.div
          initial={{opacity:0, y: 20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.5, delay:index*0.2}}
          viewport={{once: true}}
          
          
          key={index} className='hover:scale-105 duration-500
          transition-all cursor-pointer'>
            <img src={work.image}  className='w-full rounded-xl' alt=""/>
            <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
          </motion.div>
        ))
      }
      </motion.div>
    </div>
  )
}

export default Ourwork


//1 18 24