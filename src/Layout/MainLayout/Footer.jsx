import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div className='bg-[#263238] h-[229px] flex flex-row justify-center gap-28 pt-10'>
      <div className='space-y-10'>
        <img src="Img/logo footer.png" alt="" />
        <div className='text-[11px] text-[#F5F7FA]'>
          <p>Copyright © 2020 Landify UI Kit.</p>
          <p>All rights reserved</p>
        </div>
        <div className='flex flex-row text-white space-x-5'>
        <Icon icon="fe:instagram" width="22px" height="22px" />
        <Icon icon="icon-park-outline:dribble" width="22px" height="22px" />
        <Icon icon="entypo-social:twitter-with-circle" width="22px" height="22px" />
        <Icon icon="entypo-social:youtube-with-circle" width="22px" height="22px" />

        </div>
      </div>
      <div className='flex flex-row gap-14'>
        <div className='flex flex-col text-white space-y-3'>
          <h1 className='font-semibold'>Company</h1>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>About us</a>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Bog</a>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Contact Us</a>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Pricing</a>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Testimonials</a>
        </div>
        <div className='flex flex-col text-white space-y-3'>
          <h1 className='font-semibold'>Support</h1>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Help Center</a>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Terms of Services</a>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Legal</a>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Privacy Policy</a>
          <a href='#' className='text-[#F5F7FA] text-[11px]'>Status</a>
        </div>
        <div className='flex flex-col text-white space-y-3'>
          <h1 className='font-semibold'>Stay up to date</h1>
          <button type="button" className='text-white opacity-65 flex flex-row items-center justify-between rounded-md p-2 gap-2 mt-3 bg-gray-800 w-[177px] h-[28px]'><span className='text-[11px]'>Your Email Address</span><Icon icon="streamline:mail-send-email-message" width="11px" height="11px" /></button>
          
        </div>
      </div>


    </div>
  )
}

export default Footer