import React from "react"
import styled from "styled-components"
import aboutImg from "../images/about.jpg"
import theme from "../gatsby-plugin-theme-ui"
import { Heading, Text, sx } from "theme-ui"

const StyledSection = styled.section`
  background: #eff;

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
              mb: 3, // margin-bottom
            }}
          >
            Heading 2
          </Heading>

          <Heading as="h2" mb="2" sx={theme.text.heading}>
            Heading 1
          </Heading>

          <Heading // apply both the heading styles and the color style
            as="h2"
            mb="2"
            sx={{
              ...theme.text.heading, // Merging the theme text.heading style
              color: "secondary", // Adding additional color style
            }}
          >
            Heading 2
          </Heading>

          <Text sx={theme.text.default}>
            This is a display text. Users can select their preferred time,
            location, photographer, style and our API will craft a plan that
            matches best with your selected preferences. Users can select their
            preferred time, location, photographer, style and our API will craft
            a plan that matches best with your selected preferences.
          </Text>
          {/* <h2
            sx={{
              color: "primary",
              fontFamily: "heading",
              fontSize: 64,
            }}
          >
            Hello
          </h2> */}
          {/* <p>
              Users can select their preferred time, location, photographer,
              style and our API will craft a plan that matches best with your
              selected preferences. Users can select their preferred time,
              location, photographer, style and our API will craft a plan that
              matches best with your selected preferences.
            </p> */}
        </div>
        <div className="">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </StyledSection>
  )
}

export default About
