import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after { 
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
 
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        color: black;
        font-size: 1.125rem;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
         line-height: 1.7;
        font-weight: 400;
    }
    h1 {
        font-weight: 700;
        font-size: 4rem;
        line-height: 1.09;
        margin-bottom: 1.5rem;
        color: black;
        @media (max-width: 59em) {
           font-size: 3rem;
           
        }
    }
    h2 {
        font-weight: 700;
        font-size: 1.35rem;
        line-height: 1.8rem;
        color: black;
        @media (min-width: 1200px) {
            font-size: 1.45rem;
        }
    }

    h3 {
        font-size: 1rem;
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
        outline: 0;
        }

        
    }

    .container {
        max-width: 125rem;
        padding:  5rem 0;
        margin: 0 auto;
    }
    .grid {
        display: grid;
        column-gap: 6.4rem;
        row-gap: 9.6rem;
    }

    .grid:not(:last-child) {
        margin-bottom: 9.6rem;
    }

    .grid--2-cols {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid--3-cols {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid--4-cols {
        grid-template-columns: repeat(4, 1fr);
    }

    

  

        @media (max-width: 84em) {
        .container {
            column-gap: 5rem;
            row-gap: 7rem;
        }
    }

    @media (max-width: 75em) {
        .container {
            column-gap: 4.5rem;
            row-gap: 6.9rem;
        }
    }

    @media (max-width: 59em) {
        .container {
            row-gap: 6.8rem;
        }
    }

    @media (max-width: 34em) {
        .container {
            row-gap: 6.5rem;
        }
        .grid--2-cols,
        .grid--3-cols,
        .grid--4-cols {
            grid-template-columns: 1fr;
        }

}
    
`

export default GlobalStyle
