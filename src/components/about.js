import React from "react"
import styled from "styled-components"
import aboutImg from "../images/about.jpg"
import theme from "../gatsby-plugin-theme-ui"
import { Heading, Text, sx, Container } from "theme-ui"

const StyledSection = styled.section`
  /* background: #eff; */

  h2 {
    padding-bottom: 0.25rem;
  }

  img {
    max-width: 200px;
    border-radius: 10px;
  }

  p {
    font-size: 1rem;
  }
`

const About = ({ content }) => {
  return (
    <StyledSection>
      <div className="container grid grid--2-cols">
        {/* Grid One */}
        <div>
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 5],
              color: "primary",
              fontFamily: "heading",
              mb: 2, // margin-bottom
            }}
          >
            About
          </Heading>

          <Text sx={theme.text.default}>
            Over the years, dating back to 2020, I have been fully committed to
            building my web development skills. I have enrolled in numerous
            courses that challenge me and equip me with the necessary knowledge
            to build functional interfaces. After putting myself in a
            bootcamp-like environment, I began my professional career as a web
            developer at a non-profit organization. After that, I transitioned
            into another role and company. Currently, I am taking on an
            international front-end challenge, while continuing to deepen my
            understanding of React, SCSS, and front-end architecture after
            hours.
          </Text>
        </div>
        <div className="">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </StyledSection>
  )
}

export default About
