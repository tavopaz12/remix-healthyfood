import { redirect } from '@remix-run/node'
import { db } from '../../services/db'

export const action = async ({ request }) => {
  const form = await request.formData()
  const title = form.get('title')
  const content = form.get('content')
  const slug = form.get('slug')

  const post = await db.post.create({ data: { title, content, slug } })

  return redirect(`/posts/${post.id}`)
}

export function ErrorBoundary() {
  return (
    <div>
      <h3>
        <strong>😥 Algo salio mal</strong>
      </h3>
    </div>
  )
}

export const meta = () => {
  return {
    title: 'Crear nuevo post',
  }
}

export default function CreatePost() {
  return (
    <>
      <h1>Crear un nuevo post</h1>

      <form method="POST">
        <div>
          <label htmlFor="">Titulo:</label>
          <input type="text" name="title" placeholder="Titulo del post" />
        </div>

        <div>
          <label htmlFor="">Slug:</label>
          <input type="text" name="slug" placeholder="Url del post" />
        </div>

        <div>
          <label htmlFor="">Contenido:</label>
          <textarea
            type="text"
            name="content"
            placeholder="Contenido del post"
            style={{height: '10rem'}}
          />
        </div>

        <button type="submit">Add new post</button>
      </form>
    </>
  )
}
