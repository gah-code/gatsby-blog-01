import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Slider from "../components/slider"
import { Grid, Heading, sx, Text } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import Card from "../components/card"
import { Box } from "theme-ui"
import styled from "styled-components"

const samplePageLinks = [
  {
    text: "About",
    url: "about-page",
    badge: false,
    description: "Hello from the about page",
  },
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  // { text: "TypeScript", url: "using-typescript" },
  // { text: "Server Side Rendering", url: "using-ssr" },
  // { text: "Deferred Static Generation", url: "using-dsg" },
]

// import { motion } from "framer-motion"

const IndexPage = ({ data }) => {
  const heroContent = data.hero.edges[0].node
  const aboutContent = data.about.edges[1].node
  return (
    <Layout>
      <Hero content={heroContent} />
      <About content={aboutContent} />
      <p>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        {/* Edit <code>src/pages/index.js</code> to update this page. */}
      </p>

      {/* <Grid gap={4} columns={[1, "5fr 2fr"]}> */}

      <Slider />
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
    about: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`
