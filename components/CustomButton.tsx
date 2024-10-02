"use client"
import { CustomButtonProps } from '@/types'
import React from 'react'

function CustomButton({title,btnType,styles,textStyles,handleClick}:CustomButtonProps) {
  return (
    <button 
        disabled={false}
        type={btnType || "button"}
        className={`w-fit px-4 py-2 ${styles} ${textStyles}`}
        onClick={handleClick}
    >
        <span className='flex-1'>
            {title}
        </span>
    </button>
  )
}

export default CustomButton