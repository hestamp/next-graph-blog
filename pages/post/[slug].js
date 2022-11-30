import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components'
const PostDetails = ({ post }) => {
  const postObj = post

  console.log(postObj)
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="container mx-auto lg:px-10 px-6 mb-8">
      <Head>
        <title>{post.title} - Climate War</title>

        <meta
          name="description"
          content={`${post.excerpt} ${post.title} - Climate War`}
        />
        <meta name="title" content={post.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="dynamic" />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={`${post.excerpt} ${post.title} - Climate War`}
        />
        <meta property="og:image" content={post.featuredImage.url} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="dynamic" />
        <meta property="twitter:title" content={post.title} />
        <meta
          property="twitter:description"
          content={`${post.excerpt} ${post.title} - Climate War`}
        />
        <meta property="twitter:image" content={post.featuredImage.url} />
        <meta name="keywords" content={post.title.split(' ').join(',')} />
        <meta name="robots" content="index, follow" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English" />
        <meta name="author" content={post.author.name} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />

          <Comments slug={post.slug} />
          <CommentsForm slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
