import React, { useContext } from "react"
import remark from "remark"

import { ThreadContainer } from "../state"

const ThreadRender = () => {
  const { input } = useContext(ThreadContainer.Context)
  return input
}

export default ThreadRender
