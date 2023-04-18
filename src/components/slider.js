import React from "react"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Grid } from "theme-ui"
import { Box } from "theme-ui"
import styled from "styled-components"
import ImgThree from "../images/about.jpg"

// import "./Gallery.styles.scss"

const Slider = props => {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  return (
    <>
      {/* <Grid gap={4} columns={[1, "2fr 2fr"]}>
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
      </Grid> */}
      <section className="section-gallery">
        <h1>Title</h1>
        <div className="gallery">
          <ul className="gallery__slider" ref={ref}>
            <li className="gallery__slider-item ">test</li>
            <li className="smol-transitions zoom">
              <img src={ImgThree} alt="" />
            </li>
            <li className="smol-transitions zoom">
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, inventore.
              </p>
            </li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>
              <img src={ImgThree} alt="" />
            </li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Slider
