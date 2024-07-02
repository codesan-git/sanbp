import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]'></div>
      <div className='absolute space-x-8 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-20'>
        <LoginLink>
          <Button variant={'outline'}>Sign In</Button>
        </LoginLink>
        <RegisterLink>
          <Button variant={'ghost'}>Register</Button>
        </RegisterLink>
      </div>
    </div>
  )
}

export default LoginPage