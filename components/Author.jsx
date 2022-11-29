import React from 'react'
import Image from 'next/image'
const Author = ({ author }) => {
  return (
    <div className="text-center mt-14 mb-8 p-8 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-6 right-6 -top-8">
        <Image
          alt={author.name}
          unoptimized
          height="70"
          width="70"
          className=" align-middle rounded"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-2 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">''{author.bio}''</p>
    </div>
  )
}

export default Author
