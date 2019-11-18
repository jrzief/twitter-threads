import { useState } from "react"
import createContainer from "constate"

export function useThreadInput() {
  const [input, setInput] = useState("")
  const update = event => setInput(event.target.value)
  return { input, update }
}

const ThreadContainer = createContainer(useThreadInput)

export { ThreadContainer }
