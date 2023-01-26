import React from "https://esm.sh/react@18.2.0";

export default function Deno_React() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>deno-react | FUTURIST</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </head>
      <body>
        <header>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="https://github.com/jordanreger/futurist.city">SOURCE <span className="arrow">↗️</span></a></li>
          </ul>
        </header>
        <main>
          <article>
            <div className="title">deno-react</div>
            <div className="description">a <i>very</i> minimalist react boilerplate.</div>
          </article>
          <article>
            <div className="tag">GETTING STARTED</div>
            <div className="body">
              all you have to do is add your pages in the <code>/pages</code> folder and run <code>deno task start</code>! make sure not to remove <code>/pages/_404.tsx</code>, otherwise you'll start returning <code>Internal Server Error</code> - you can style it however you'd like though!
            </div>
          </article>
          <article>
            <div className="tag">IMAGE TEST</div>
            <div className="body">
              <img src="/deno_paper.png" style={{width: "10vh"}} />
              <br/>
              <br/>
              This is an image. Woah! This is to showcase the server's abilities to serve from the <code>static</code> directory.
              You can serve other things like CSS, GIFs, WEBP and WEBM files, XML, you name it!
            </div>
          </article>
          <article>
            <div className="tag">SOURCE</div>
            <div className="body">
              View the source on Github:
              <br/>
              <br/>
              <a href="https://github.com/jordanreger/deno-react">github.com/jordanreger/deno-react</a>
            </div>
          </article>
          <article>
            <div className="tag">EXAMPLES</div>
            <div className="body">
              This site is built with <code>deno-react</code>! send us an email at <a href="mailto:mail@futurist.city">mail@futurist.city</a> to add to the list:
              <br/>
              <br/>
              <ul>
                <li><a href="https://futurist.city">futurist.city</a></li>
              </ul>
            </div>
          </article>
        </main>
      </body>
    </>
  )
}