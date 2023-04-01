import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  /* margin: 5rem 1rem; */
  /* background: #eff; */
`

const StyledBox = styled.div`
  padding-bottom: 2rem;
`

const About = ({ content }) => {
  return (
    <StyledSection>
      {" "}
      <div className="container grid grid--2-cols">
        {/* Grid One */}
        <StyledBox>
          <h2>What we do</h2>
          <h3>Why I Photograph</h3>
          <p>
            Users can select their preferred time, location, photographer, style
            and our API will craft a plan that matches best with your selected
            preferences.
          </p>
        </StyledBox>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            quasi.
          </p>
        </div>
      </div>
    </StyledSection>
  )
}

export default About
