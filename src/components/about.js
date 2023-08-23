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
  .step-img-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }

  img {
    max-width: 250px;
    border-radius: 10px;
  }

  p {
    font-size: 1rem;
  }

  .grid--2-cols-other {
    grid-template-columns: repeat(1, 3fr 2fr);
  }

  /* Medium screens */
  @media (min-width: 481px) and (max-width: 768px) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }
  }

  .underline {
    position: relative;
  }

  .underline:after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    height: 1em;
    bottom: -0.6em;
    background-image: url(https://www.beyondcss.dev/underline.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }

  strong {
    font-weight: 700;
    color: #2a3439;
    opacity: 0.9;
  }
`

const About = ({ content }) => {
  return (
    <StyledSection>
      <div className="container grid grid--2-cols-other">
        {/* Grid One */}
        <div>
          {/* <Heading
            as="h2"
            sx={{
              fontSize: [5, 5],
              color: "primary",
              fontFamily: "heading",
              mb: 2, // margin-bottom
            }}
          >
            About
          </Heading> */}
          <h2 className="title fluid-type">About</h2>

          <Text sx={theme.text.default}>
            Growing up, I always loved art and design. I played PC games, read
            comic books, and drew my own interpretations of them. Later on, this
            led me to customize MySpace pages and immerse myself in graffiti,
            skating, and social media during the early 2000s. Years later, I
            picked up a camera and never put it down it became my constant
            companion, accompanying me everywhere I went, I captured and edited
            weddings, automotive, and amateur MMA fights, where I captured live
            shots from ringside. This led to me needing a photography website
            for showcasing my work to clients. From there, I discovered that I
            find coding - or rather, developing the look and feel of a website -
            to be very thrilling.
          </Text>
        </div>
        <div className="step-img-box">
          <img src={aboutImg} alt="" />
        </div>
      </div>

      <strong>
        testing
        <span className="underline">test </span>
      </strong>
    </StyledSection>
  )
}

export default About
