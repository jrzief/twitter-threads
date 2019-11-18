import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ThreadInput from "../components/ThreadInput"
import { ThreadContainer } from "../state"
import ThreadRender from "../components/ThreadRender"

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Write your Twitter thread with only markdown.</p>
    <p>
      Here's how it works
      <ol>
        <li>Write markdown</li>
        <li>
          Separate tweets with <code>___</code>
        </li>
        <li>Preview your thread</li>
        <li>Click post</li>
      </ol>
      <TwoColumn>
        <ThreadContainer.Provider>
          <div>
            <h2>Write markdown here ✍️</h2>
            <ThreadInput />
          </div>
          <div>
            <h2>Your twitter thread 👇</h2>
            <ThreadRender />
          </div>
        </ThreadContainer.Provider>
      </TwoColumn>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
