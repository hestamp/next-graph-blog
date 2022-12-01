import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections/index'
export default function Home({ posts }) {
  return (
    <div className="container mx-auto lg:px-10 px-6 mb-8">
      <Head>
        <title>Climate War</title>

        <meta name="description" content={`Climate War`} />
        <meta name="title" content="Climate War" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clim.vercel.app/" />
        <meta property="og:title" content="Climate War" />
        <meta property="og:description" content="Climate War" />
        <meta property="og:image" content="Climate War" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://clim.vercel.app/" />
        <meta property="twitter:title" content="Climate War" />
        <meta property="twitter:description" content="Climate War" />
        <meta property="twitter:image" content="Climate War" />
        <meta name="keywords" content="Climate,War" />
        <meta name="robots" content="index, follow" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English" />
        <meta name="author" content="Tom Hestamp" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-0">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, id) => (
            <PostCard key={id} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
