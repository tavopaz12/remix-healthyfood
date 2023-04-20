import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import * as React from 'react'

import darkStylesUrl from '~/styles/dark.css'
import deleteMeRemixStyles from '~/styles/demos/remix.css'
import globalStylesUrl from '~/styles/global.css'

export const links = () => [
  { rel: 'stylesheet', href: globalStylesUrl },
  {
    rel: 'stylesheet',
    href: darkStylesUrl,
    media: '(prefers-color-scheme: dark)',
  },
  { rel: 'stylesheet', href: deleteMeRemixStyles },
]

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <div className="remix-app">
      <Header></Header>
      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

function Header() {
  return (
    <header className="remix-app__header">
      <div className="container remix-app__header-content">
        <nav aria-label="Main navigation" className="remix-app__header-nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="remix-app__footer">
      <div className="container remix-app__footer-content">
        <p>&copy; tavopaz12</p>
      </div>
    </footer>
  )
}
