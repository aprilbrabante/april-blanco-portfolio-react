import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {

const form = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm(
    'service_4sooc5e',
    'template_j3zwxmm',
    form.current,
    'cUw5DBlzvoAkE9koo'
  )
  .then(() => {
    alert('Message sent!')
  }, () => {
    alert('Failed to send message')
  })

  e.target.reset()
}
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeOut'}}
        viewport={{once: false, amount:0.2}}
        id='contact'
        className='py-20 bg-dark-100'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get in 
                <span className='text-purple'>Touch</span>

            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                Have a project in mind of want to collaborate? Let's talk!

            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/**Contact Form */}
                <div>
                    <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2'>
                                Your Name
                            </label>
                            <input type="text" name='name' className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 
                            outline-none' />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>
                                Email Address
                            </label>
                            <input type="email" name='email' className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 
                            outline-none' />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2'>
                                Your Message
                            </label>
                            <textarea type="text" name='message' className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 
                            outline-none' />
                        </div>

                        <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium
                        hover:bg-puple-700 transition duration-300 cursor-pointer'>
                            Send Message

                        </button>
                    </form>
                </div>
                {/**Contact Information */}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaMapMarkedAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                Location
                            </h3>
                            <p className='text-gray-400'>
                                Puerto Princesa City, Palawan
                            </p>
                        </div>

                    </div>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                Email
                            </h3>
                            <p className='text-gray-400'>
                                aprilannebrabante@gmail.com
                            </p>
                        </div>

                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                Phone
                            </h3>
                            <p className='text-gray-400'>
                                +639478464818
                            </p>
                        </div>

                    </div>

                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a href="https://github.com/aprilbrabante" target="_blank" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                            text-purple hover:bg-purple hover:text-white transition duration-300'>
                                <FaGithub/>
                            </a>

                            <a href="https://www.linkedin.com/in/april-anne-brabante-blanco-2833b1122?originalSubdomain=ph" target="_blank" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                            text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300'>
                                <FaLinkedin/>
                            </a>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    </motion.div>
  )
}

export default Contact