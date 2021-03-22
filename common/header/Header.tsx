import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import KwekLogo from 'public/svg/kweklogo.svg'

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <a>
          <Image width='228' height='30' src='/svg/kweklogo.svg' layout='responsive' alt='Kwek logo' />
        </a>
      </Link>
    </header>
  )
}

export default Header;