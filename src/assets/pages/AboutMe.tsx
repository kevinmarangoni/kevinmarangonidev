import React from 'react'
import Layout from '@components/layout/Layout'
import Image from 'next/image'

import me from '@images/me.png'

const AboutMe: React.FC = () => {
  return (
    <Layout>
      <div>About Me</div>
      <Image src={me} alt={`me`} height={250} width={190}/>
    </Layout>
  )
}

export default AboutMe
