import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineCalendar } from 'react-icons/ai'
const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg  lg:p-6 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Link href={`/post/${post.slug}`}>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className=" object-cover absolute h-80 w-full sm:object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </Link>
      </div>
      <h1 className="transition duration-500 text-center mb-8 cursor-pointer hover:text-teal-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            alt={post.author.name}
            width="30"
            unoptimized
            height="30"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700  ">
          <AiOutlineCalendar className=" h-6 w-6 inline mr-2 text-teal-500" />
          <span className="align-middle">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>

      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-teal-600 text-lg font-medium rounded text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
