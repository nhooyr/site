import { css } from "@emotion/core"
import React from "react"

export function Text(props: { value: string; onChange: React.ChangeEventHandler<HTMLInputElement> }) {
  return (
    <input
      type="text"
      {...props}
      css={css`
        appearance: none;
        word-break: normal;
        border-radius: 5px;
        padding: 5px 15px;
        height: 40px;
        width: 150px;
        border: 1px solid #ccc;
      `}
    />
  )
}

export function Submit(props: { value: string }) {
  return (
    <input
      type="submit"
      {...props}
      css={css`
        padding: 5px 15px;
        height: 40px;
        border-radius: 5px;
        border: none;

        color: white;
        @media (prefers-color-scheme: dark) {
          color: black;
        }

        background-color: var(--bright-color);
        @media (hover: hover) {
          :hover {
            background-color: var(--active-color);
          }
        }

        :active {
          background-color: var(--active-color);
        }
      `}
    />
  )
}
