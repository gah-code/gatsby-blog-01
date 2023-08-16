import React from "react"
import styled from "styled-components"

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
]

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }

  .description {
    padding: 0.5rem 0;
  }

  .data {
    padding: 32px;
    padding-top: 24px;
  }

  .skill-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .skill {
    padding: 2px 12px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
  }
`

const Hero = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection id="hero">
      <h1 className="title">
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
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  )
}

export default Hero
