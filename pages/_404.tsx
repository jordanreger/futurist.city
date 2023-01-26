import React from "https://esm.sh/react@18.2.0";

export default function error() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>404 &#8212; deno-react</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </head>
      <body>
      <header>
          <ul>
            <li><a href="/" className="active">HOME</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="https://github.com/jordanreger/futurist.city">SOURCE <span className="arrow">↗️</span></a></li>
          </ul>
        </header>
        <main>
          <article>
            <div className="tag">404</div>
            <div className="body">
              oops! there's no page here... <a href="/">go home</a>!
            </div>
          </article>
        </main>
      </body>
    </>
  )
}