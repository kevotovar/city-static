import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
      render={data => <Img fluid={data.file.childImageSharp.fluid} />}
    />
  )
}
