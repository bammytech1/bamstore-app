import React from 'react'

import apple from "../../assets/apple.svg"
import huawei from "../../assets/huawei.svg"
import nokia from "../../assets/nokia.svg"
import playstation from "../../assets/playstation.svg"
import samsung from "../../assets/samsung.svg"
import sony from "../../assets/sony.svg"
import toshiba from "../../assets/toshiba.svg"
import lenovo from "../../assets/lenovo.svg"
import windows from "../../assets/windows.svg"
import lg from "../../assets/lg.svg"
import asus from "../../assets/asus.svg"

function Brand() {
    const brandList = [
        {image: apple}, {image: huawei}, {image:nokia}, {image:playstation}, {image:samsung}, {image:sony}, {image:toshiba}, {image:lenovo}, {image:windows}, {image:lg}, {image:asus}, {image: apple}, {image: huawei}, {image:nokia}, {image:playstation}, {image:samsung}, {image:sony}
    ]
  return (
    <section className='flex bg-light w-full h-28 gap-8 py-2 overflow-x-auto'>
        {brandList.map((list) => (
            <img src={list.image} alt="hello" className=' w-20 aspect-square object-contain mix-blend-normal ' />
        ))
        }
    </section>
  )
}

export default Brand