import { Link } from '@remix-run/react'

export const meta = () => ({
  title: 'Healthyfood',
  description: 'Welcome to Healthyfood!',
})

export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Healthyfood!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo
          saepe aspernatur voluptatem repellat. Debitis perferendis placeat
          fugit quia numquam iure sed eveniet consequatur! Voluptatibus
          molestiae nihil vero quisquam quis.
        </p>
      </main>
      <aside>
        <h2>Links</h2>
        <ul>
          <li>
            <Link to="posts">Publicaciones</Link>
          </li>

          <li>
            <Link to="posts/create">Crear nueva publicacion</Link>
          </li>
        </ul>
      </aside>
    </div>
  )
}
