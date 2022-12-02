import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'
const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <div className="flex  justify-center">
        <h3 className="text-xl mb-4 fond-semibold border-b pb-2">Topics</h3>
      </div>

      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursos-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
