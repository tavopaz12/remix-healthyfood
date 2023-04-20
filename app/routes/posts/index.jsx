import { Link, useLoaderData } from '@remix-run/react'
import { db } from '../../services/db'

export const meta = () => ({
  title: 'Publicaciones',
})

export const loader = async () => {
  const posts = await db.post.findMany()

  return { posts }
}
export default function Post() {
  const { posts } = useLoaderData()

  return (
    <div>
      <h1>Publicaciones</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
