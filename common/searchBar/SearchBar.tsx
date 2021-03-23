import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'

const SearchBar = () => {
  return (
    <div id='search-bar'>
      <form>
        <Image width='24' height='24' src='/svg/search-icon.svg'/>
        <input type="search"/>
        <Button className='btn'>
          Hello
        </Button>
      </form>
    </div>
  )
}

export default SearchBar