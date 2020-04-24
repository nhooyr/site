import { FC } from "react"

export interface Meta {
  readonly title: string
  readonly path: string
  readonly publishDate: Date
  readonly editDate?: Date
}

export interface Post {
  readonly meta: Meta
  readonly body: () => Promise<{
    readonly default: FC
  }>
}

export function formatDate(date: Date) {
  return date.toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" })
}

const index: Array<Post> = [
  ...(process.env.NODE_ENV === "development" ? [
    {
      meta: {
        title: "Engineering My Blog",
        path: "/engineering-my-blog",
        publishDate: new Date("April 27, 2020"),
      },
      body: () => import("./2020-04-27-EngineeringMyBlog"),
    }
  ] : []),
  {
    meta: {
      title: "Why nhooyr?",
      path: "/why-nhooyr",
      publishDate: new Date("Feb 9, 2020"),
    },
    body: () => import("./2020-02-09-WhyNhooyr"),
  },
  {
    meta: {
      title: "Time To Give Back",
      path: "/time-to-give-back",
      publishDate: new Date("Feb 2, 2020"),
    },
    body: () => import("./2020-02-02-TimeToGiveBack"),
  },
]

export default index
