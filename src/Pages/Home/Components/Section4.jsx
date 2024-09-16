import React from 'react'

function Section4() {
    const images = [
        { id: 1, url: "Img/Icon.png", alt: "icon 1", heading:"Membership Organisation", content:"Our membership management software provides full automation of membership renewals and payment" },
        { id: 1, url: "Img/Icon (1).png", alt: "icon 2", heading:"National Associations", content:"Our membership management software provides full automation of membership renewals and payments" },
        { id: 1, url: "Img/Icon (2).png", alt: "icon 3", heading:"Clubs And Groups", content:"Our membership management software provides full automation of membership renewals and payment" }
    ];
  return (
    <div>
        <div className='flex flex-row justify-evenly space-x-7 mt-8 h-[196px]'>
        {images.map((image) => (
            <div className='flex flex-col items-center justify-center w-[208px] h-[182px] space-y-1 shadow-md'>
                <img src={image.url} alt="" className='w-[45px] h-[38px]'/>
                <h1 className='text-[19px] text-[#4D4D4D] font-bold text-center'>{image.heading}</h1>
                <p className='text-center text-[9px] text-[#717171]'>{image.content}</p>
            </div>
            ))}

        </div>
    </div>
  )
}

export default Section4