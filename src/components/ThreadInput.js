import React, { useState, useContext } from "react"
//import { styled, Input } from "reakit"
import styled from "styled-components"

const Textarea = styled.textarea`
  width: 100%;
  min-height: 400px;
  background: #f7f7f7;
  color: #1f1f1f;
  font-family: monospace;
  font-size: 1.4em;
  padding: 0.5em;
`

const ThreadInput = () => {
  const [input, setInput] = useState("")

  return (
    <Textarea value={input} onChange={event => setInput(event.target.value)} />
  )
}

export default ThreadInput
