import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'emotion'

const styles = {
  Hero: (image: string) => css`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

export default function IndexHero() {
  return (
    <StaticQuery
      query={graphql`
        {
          file(relativePath: { eq: "building-condo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1024) {
                src
              }
            }
          }
        }
      `}
      render={data => (
        <div className={styles.Hero(data.file.childImageSharp.fluid.src)}>
          <h1 className="text-white">City Bienes Raíces</h1>
        </div>
      )}
    />
  )
}
