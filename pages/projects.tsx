import React from "https://esm.sh/react@18.2.0";

export default function Projects() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta http-equiv="content-language" content="en-us" />

        <title>Projects &#8212; FUTURIST</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </head>
      <body>
        <header>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/projects" className="active">PROJECTS</a></li>
            <li><a href="https://github.com/jordanreger/futurist.city">SOURCE <span className="arrow">↗️</span></a></li>
          </ul>
        </header>
        <main>
          <article>
            <div className="title">deno-react</div>
            <div className="description">a <i>very</i> minimalist react boilerplate.</div>
            <hr/>
            <div className="body">
              deno-react is the easiest way to get started with JSX and Deno.
              All you have to do is add your JSX/TSX files to the <code>/pages</code> directory and run <code>deno task start</code>!
              <br/>
              <br/>
              view the <a href="https://github.com/jordanreger/deno-react">source</a> or the <a href="https://deno-react.deno.dev">demo</a>.
            </div>
          </article>
          <article>
            <div className="title">feeds</div>
            <div className="description">a basic feed reader.</div>
            <hr/>
            <div className="body">
              feeds is a very basic feed reader.
              read about <a href="https://jordanreger.com/Why-RSS-still-matters-5093a8e7d2944f00ad2dc24ad52f7df1">why RSS still matters</a>.
              <br/>
              <br/>
              visit the <a href="https://feeds.land">site</a> or view the <a href="https://github.com/jordanreger/feeds">source</a>.
            </div>
          </article>
          <article>
            <div className="title">crate</div>
            <div className="description">is under construction...</div>
            <hr/>
            <div className="body">
              visit the <a href="https://crate.land">site</a> or view the <a href="https://github.com/jordanreger/crate">source</a>.
            </div>
          </article>
          <article>
            <div className="tag">COMING SOON</div>
            <div className="body">
              stay tuned for more projects...
            </div>
          </article>
        </main>
        <footer>
          <div className="copyright"><a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></div>
        </footer>
      </body>
    </>
  )
}