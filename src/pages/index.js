import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Home</h1>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Link to="/" activeStyle={{ color: 'red' }}>About (Gatsby Link)</Link>
        </li>
        <li>
          <Link to="/about">About (Gatsby Link)</Link>
        </li>
      </ul>
  </Layout>
)

export default IndexPage
