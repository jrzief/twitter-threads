import React, { useContext, useState, useEffect } from "react"
import remark from "remark"
import utf8 from "remark-utf8"
import styled from "styled-components"

import { ThreadContainer } from "../state"

const TweetStyle = styled.div`
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.01em;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 560px;
  -webkit-font-smoothing: antialiased;
  color: #14171a;
  margin-bottom: 1.5em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`
const CharCountStyle = styled.div`
  font-size: 17px;
  text-align: right;
`

const CharCount = ({ value }) => {
  return <CharCountStyle>{280 - value.length}</CharCountStyle>
}

const Tweet = ({ value }) => {
  const [rendered, setRendered] = useState("")

  useEffect(() => {
    remark()
      .use(utf8)
      .process(value, (err, output) => {
        if (err) {
          console.error(err)
        } else {
          setRendered(output.contents)
        }
      })
  }, [value])

  return (
    <TweetStyle>
      {rendered}
      <CharCount value={rendered} />
    </TweetStyle>
  )
}

const ThreadRender = () => {
  const { input } = useContext(ThreadContainer.Context)

  return (
    <>
      {input.split("___").map(tweet => (
        <Tweet value={tweet} />
      ))}
    </>
  )
}

export default ThreadRender
