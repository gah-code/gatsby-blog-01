import React from "react"
import styled from "styled-components"
import aboutImg from "../images/about.jpg"

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
          <h2>About</h2>
          <p>
            Users can select their preferred time, location, photographer, style
            and our API will craft a plan that matches best with your selected
            preferences. Users can select their preferred time, location,
            photographer, style and our API will craft a plan that matches best
            with your selected preferences.
          </p>
        </div>
        <div className="">
          <img src={aboutImg} alt="" />
        </div>

        <div className="">
          <img src={aboutImg} alt="" />
        </div>
        <h2
          sx={{
            color: "primary",
            fontFamily: "heading",
          }}
        >
          Hello
        </h2>
      </div>
    </StyledSection>
  )
}

export default About
