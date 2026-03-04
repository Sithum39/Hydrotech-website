import React from 'react'
import { motion } from "motion/react"

const MissionVision = () => {
    return (
        <div className='section-gray py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-28 relative overflow-hidden'>
            {/* Background decorations */}
            <div className='absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
            <div className='absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl'></div>

            <div className='max-w-6xl mx-auto relative'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='text-center mb-14'>
                    <span className='text-secondary font-semibold text-sm uppercase tracking-widest'>Who We Are</span>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4'>
                        We Are Hydrotech Core Pvt Ltd
                    </h2>
                    <p className='text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed'>
                        We drive the modernization of water infrastructure through advanced IoT-enabled smart
                        metering solutions. By integrating intelligent sensors, embedded systems, secure cloud connectivity,
                        and automated control mechanisms, we provide real-time monitoring, operational transparency,
                        and efficient resource management for utilities and communities.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='relative group'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500'></div>
                        <div className='relative bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 rounded-2xl p-8 sm:p-10 h-full'>
                            <div className='w-14 h-14 bg-gradient-to-br from-primary to-[#0d7a9e] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20'>
                                <svg className='w-7 h-7 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Our Mission</h3>
                            <p className='text-gray-500 dark:text-gray-400 leading-relaxed'>
                                To revolutionize water management by delivering secure, scalable, and self-powered IoT-based
                                solutions that minimize non-revenue water, enhance billing accuracy, strengthen infrastructure
                                reliability, and promote sustainable water usage.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className='relative group'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500'></div>
                        <div className='relative bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 rounded-2xl p-8 sm:p-10 h-full'>
                            <div className='w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/20'>
                                <svg className='w-7 h-7 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Our Vision</h3>
                            <p className='text-gray-500 dark:text-gray-400 leading-relaxed italic'>
                                "To shape a smarter, sustainable future by providing intelligent water management solutions
                                that enable industries, utilities, and communities to conserve resources, enhance resilience, and
                                achieve measurable environmental impact."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default MissionVision
