import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container  mx-auto px-10 mb-8">
      <div className="border-b  border-gray-400  w-full inline-block py-4">
        <div className="md:float-left  justify-center flex lg:block ">
          <Link href="/">
            <Image unoptimized width="120" height="40" src="climate-war.png" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
