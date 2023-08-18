import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
    <div className="about">
        <div className='desc'>
            <h1>Hi there , i'm Ahmed Ben Abid</h1>
            <p>A student engineer is an individual who trains to become a full pledge
                professional engineer by gaining working experience in the field of engineering.
                 By using their knowledge in the principles of science and mathematics, student
                 engineers should help other professionals develop economical solutions and solve technical problems.
                 They are required to engage themselves in the testing, production, or maintenance of newly developed products.</p>

        </div>
        <img src='/me.jpg' alt='ahmed' className='ahmed'/>
    </div>
    </>
  )
}

export default About
