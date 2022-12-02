import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'
const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <div className="flex  justify-center">
        <h3 className="text-xl border-b mb-4 fond-semibold  pb-2">
          {slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
      </div>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <Link href={`/post/${post.slug}`} className="w-16 flex-none">
            <Image
              unoptimized
              alt={post.title}
              height="60"
              width="60"
              className="align-middle rounded"
              src={post.featuredImage.url}
            />
          </Link>
          <div className="flex-grow ml-4">
            <Link href={`/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
