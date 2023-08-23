import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Slider from "../components/slider"
import { Grid, Heading, sx, Text } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

import { Box } from "theme-ui"
import styled from "styled-components"

// import Stack from "../components/stack"
// import { motion } from "framer-motion"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
      <About />
      <Grid gap={3} columns={[1]}>
        <Box sx={{ backgroundColor: "secondary", padding: 2 }}>
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 5],
              color: "primary",
              fontFamily: "heading",
              mb: 3, // margin-bottom
              mt: "45px",
            }}
          >
            Sparks
          </Heading>
          <Text
            sx={{
              ...theme.text.default,
            }}
          >
            When I was young, I had a fascination with PC games like Roller
            Coaster Tycoon, customizing my MySpace page, and graffiti culture. I
            loved the feeling of being able to create something unique with just
            a few clicks of a button. As I grew older, my interest in design
            only increased, and I found myself spending more and more time in
            programs like Photoshop, perfecting my skills and experimenting with
            new techniques.
          </Text>
        </Box>
      </Grid>
      <Grid
        columns={["1fr", "1fr 2fr"]} // One column on small screens, two columns on larger screens
        gap={4}
        sx={{
          padding: 4,
          backgroundColor: "lightgray",
        }}
      >
        <Box sx={{ backgroundColor: "white", padding: 3 }}>
          <h2>Column 1</h2>
          <p>This is the left column content.</p>
        </Box>
        <Box sx={{ backgroundColor: "white", padding: 3 }}>
          <h2>Column 2</h2>
          <p>This is the right column content.</p>
        </Box>
      </Grid>

      <Grid
        columns={["1fr", "1fr 2fr 1fr"]} // One column on small screens, three columns on larger screens
        gap={[3, 4]} // Adjust spacing for better readability on small screens
        sx={{
          padding: [3, 2], // Larger padding on small screens
          // backgroundColor: "lightgray",
        }}
      >
        <Box
          sx={{
            gridColumn: ["1 / -1", "1 / span 3"],
            backgroundColor: "white",
            padding: 1,
          }}
        >
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 5],
              color: "primary",
              fontFamily: "heading",
              mb: 3, // margin-bottom
              mt: 4,
            }}
          >
            Sparks
          </Heading>
          <Text sx={theme.text.default}>
            When I was young, I had a fascination with PC games like Roller
            Coaster Tycoon, customizing my MySpace page, and graffiti culture. I
            loved the feeling of being able to create something unique with just
            a few clicks of a button. As I grew older, my interest in design
            only increased, and I found myself spending more and more time in
            programs like Photoshop, perfecting my skills and experimenting with
            new techniques.
          </Text>
        </Box>

        <Box
          sx={{
            gridColumn: ["1 / -1", "1 / span 3"],
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Text sx={theme.text.default}>
            It wasn't until I stumbled upon Adobe Muse that I truly found my
            calling. Dabbling in interface design quickly became a hobby, and I
            found myself spending hours upon hours tinkering with different
            layouts and designs. And as I delved deeper into the world of
            design, I realized that I had a natural curiosity for the technical
            side of things. And so, I began teaching myself to code.
          </Text>
        </Box>

        <Box
          sx={{
            gridColumn: ["1 / -1", "1 / span 3"],
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Text sx={theme.text.default}>
            At first, coding was just a way to bring my photography website
            designs to life. But as I continued to experiment and push myself, I
            found that coding was deeply gratifying in its own right. It allowed
            me to create something from scratch, to take an idea and turn it
            into a fully functional website. I loved the feeling of being able
            to see my vision come to life, and to know that I had the skills to
            make it happen.
          </Text>
        </Box>
      </Grid>

      {/* <Grid gap={4} columns={[1, "5fr 2fr"]}> */}

      <Slider />
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
