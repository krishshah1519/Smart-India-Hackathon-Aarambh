import React from 'react'
import './Features.css'
import Feature1 from '../../assets/feature1.jpg'
import Feature2 from '../../assets/feature2.jpg'
import Feature3 from '../../assets/feature3.jpg'
import Feature4 from '../../assets/feature4.jpg'
import Feature1_icon from '../../assets/feature1_icon.png'
import Feature2_icon from '../../assets/feature2_icon.png'
import Feature3_icon from '../../assets/feature3_icon.png'

const Features = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={Feature1} alt="" />
        <div className='caption'>
          <img src={Feature1_icon} alt="" />
          <p>AI-Powered Quiz</p>
        </div>
      </div>
      <div className='program'>
        <img src={Feature2} alt="" />
        <div className='caption'>
          <img src={Feature2_icon} alt="" />
          <p>Scholarship Programs</p>
          
        </div>
      </div>
      <div className='program'>
        <img src={Feature3} alt="" />
        <div className='caption'>
          <img src={Feature3_icon} alt="" />
          <p>Resources</p>
          
        </div>
      </div>
      <div className='program'>
        <img src={Feature4} alt="" />
        <div className='caption'>
          <img src={Feature3_icon} alt="" />
          <p>s</p>
          
        </div>
      </div>
    </div>
  )
}

export default Features
