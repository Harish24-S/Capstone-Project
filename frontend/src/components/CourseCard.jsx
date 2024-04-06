import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../framer-utils/framer';
export function CourseCard({ src, title,delay,price,description,btnText }) {
  return (
    <motion.div
    initial="hidden"
    whileInView={"show"}
    variants={fadeIn("up",delay,0.6)}
    viewport={{once:true}}
    whileHover={{ scale: 1.1 }}
      className="max-w-[250px] rounded-md border bg-white cursor-pointer">
      <div className='p-2'>
        <img
          src={src}
          alt="Laptop"
          className="max-h-[150px] w-full rounded-md object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className='text-orange-500'>{price}</p>
        <p className="mt-2 text-xs text-gray-600">
          {description}
        </p>
        <button type="button" className="mt-3 rounded-sm bg-[#f8c365] px-3 py-2 text-[10px] font-semibold  shadow-sm hover:bg-[#f5b951] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          {btnText}
        </button>
      </div>
    </motion.div>
  )
}

export default CourseCard;