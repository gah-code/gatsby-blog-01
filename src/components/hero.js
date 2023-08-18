import React from "react"
import styled from "styled-components"

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "SCSS",
    level: "advanced",
    color: "#2EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Gatsby",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Theme UI",
    level: "intermediate",
    color: "#E843",
  },
  {
    skill: "GraphQL",
    level: "beginner",
    color: "#FF0",
  },
  {
    skill: "Storybook",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    skill: "ally",
    level: "beginner",
    color: "#FF3B00",
  },
]

const StyledSection = styled.section`
  .title {
    margin-bottom: 0.5rem;
    padding-top: 4rem;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }

  .description {
    padding: 1.5rem 0;
  }

  .data {
    padding: 32px 0;
    padding-top: 10px;
  }

  .skill-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
    max-width: 32rem;
  }

  .skill {
    font-size: 0.9rem;
    padding: 0.2rem 0.8rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: inset 0 0 0 2px #444;

    /* Put Transition on parent state */
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  @media (max-width: 34em) {
    .skill-list {
      gap: 6px;
      margin-top: 10px;
    }
    .skill {
      padding: 0.4rem 0.8rem;
      font-size: 0.7rem;
    }
  }
`

const Hero = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection id="hero">
      <h1 className="title fluid-type">
        {frontmatter.greetings}
        <span role="img" aria-label="emoji">
          {frontmatter.emoji}
        </span>
        <br />
        {frontmatter.title}
      </h1>
      <h2 className="subtitle">
        {frontmatter.subtitlePrefix}{" "}
        <span className="highlighted">{frontmatter.subtitleHighlight}</span>
      </h2>
      <div className="description">{rawMarkdownBody}</div>
      <div className="data">
        <SkillList />
      </div>
    </StyledSection>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(skill => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span> */}
    </div>
  )
}

export default Hero
