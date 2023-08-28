import React from 'react'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'

function CommonCard({heading,paragraph,btnText,paragraphStyle,headingStyle}) {
  return (
    <div>
        <Heading as="h2" text={heading} className={headingStyle}/>
        <Paragraph text ={paragraph} className={paragraphStyle}/>
        <Button text={btnText}/>
    </div>
  )
}

export default CommonCard