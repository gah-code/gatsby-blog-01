import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Slider from "../components/slider"
import { Grid } from "theme-ui"
import { Box } from "theme-ui"
import styled from "styled-components"

// import Stack from "../components/stack"

// import { motion } from "framer-motion"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
      {/* <Stack /> */}
      <About />
      <Grid gap={4} columns={[1, "2fr 2fr"]}>
        <Box bg="primary">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Box>
        <Box bg="muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro
          totam veritatis dolore consequuntur fuga vel assumenda magni ipsa
          dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          porro totam veritatis dolore consequuntur fuga vel assumenda magni
          ipsa dicta.
        </Box>
      </Grid>
      <Slider />
      <div
        sx={{
          maxWidth: 212,
          mx: "auto",
          px: 3,
          py: 4,
        }}
      >
        Centered
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
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
  }
`
