import { useLoaderData } from '@remix-run/react'
import { db } from '../../services/db'
import Markdown from 'marked-react'

export const loader = async ({ params }) => {
  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
  })

  return { post }
}

export default function PostSlug() {
  const { post } = useLoaderData()

  if (!post) {
    return (
      <>
        <h3>Post no encontrado</h3>
      </>
    )
  }

  return (
    <>
      <div>
        <h1>{post?.title}</h1>
        <span>{post?.createdAt}</span>
      </div>
      <Markdown value={post?.content}></Markdown>
    </>
  )
}

export const meta = ({ data: { post } }) => ({
  title: post ? post.title : 'Opps.. Algo salio mal',
})
