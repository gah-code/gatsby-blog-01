import React from "react"
import styled from "styled-components"
import aboutImg from "../../images/about.jpg"
import theme from "../../gatsby-plugin-theme-ui"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Heading, Text, sx, Container } from "theme-ui"

const StyledSection = styled.section`
  /* background: #eff; */

  h2 {
    padding-bottom: 0.25rem;
  }
  ul {
    background-color: red;
  }

  li {
    color: #263147;
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

  .grid--2-cols-other {
    grid-template-columns: repeat(1, 3fr 1fr);
  }

  /* Medium screens */
  @media (min-width: 481px) and (max-width: 768px) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }
  }
`

const posts = [
  // An array of post objects with properties like id, slug, title, date, and excerpt
  // Example: { id: 1, slug: '/post-1', title: 'Post 1', date: '2023-08-28', excerpt: '...' }
  // ...

  {
    id: 1,
    slug: "/post-1",
    title: "Post 1",
    date: "2023-08-28",
    excerpt: "...",
  },
]

const Update = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content

  return (
    <StyledSection>
      <div className="container grid grid--2-cols-other">
        <div>
          <h2 className="title fluid-type">{frontmatter.title}</h2>
          <Text sx={theme.text.default}>{rawMarkdownBody}</Text>
          <ul>
            <li>{frontmatter.list}</li>
          </ul>
        </div>
        <div className="step-img-box">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </StyledSection>
  )
}

export default Update
