import { css } from "@emotion/core"
import React from "react"
import H1 from "./components/H1"
import Link from "./components/Link"
import P from "./components/P"
import postIndex, { formatDate } from "./posts"

export default function Home() {
  return (
    <>
      <P>
        Hi, I'm Anmol.
        <br />
        I go by nhooyr on the internet.
        <br />
        I'm a software engineer from Toronto.
        <br />
        Welcome to my blog.
      </P>
      <PostIndex />
    </>
  )
}

function PostIndex() {
  return (
    <div
      css={css`
        ol {
          padding: 0;
          margin: 0;
        }

        li {
          display: inline;
          line-height: 2;
        }
      `}
    >
      <H1
        css={css`
          font-size: 75px;
          font-weight: 200;
        `}
      >
        Posts
      </H1>

      <ol>
        {postIndex.map((p, i) => {
          return (
            <li key={i}>
              <span>
                <Link href={p.meta.path}>
                  {formatDate(p.meta.publishDate)}
                  &ensp; &mdash; &ensp;
                  {p.meta.title}
                </Link>
              </span>
              <br />
            </li>
          )
        })}
      </ol>
    </div>
  )
}
