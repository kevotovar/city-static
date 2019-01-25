import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function IndexProperties() {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulProperty(limit: 9) {
            edges {
              node {
                id
                title
                operation
                terrain
                price
                garage
                location {
                  lon
                  lat
                }
                photos {
                  fixed(
                    width: 600
                    height: 300
                    cropFocus: CENTER
                    background: "rgb:F6F7F8"
                  ) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    width
                    height
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulProperty: { edges } }) => (
        <div className="flex flex-wrap justify-around">
          {edges.map(({ node }: any) => (
            <div key={node.id} className="lg:w-1/3 sm:w-1/2 w-full flex flex-col self-stretch">
              <div className="rounded overflow-hidden shadow-lg mx-3 my-2 h-full">
                <div className="flex justify-center">
                  <Img fixed={node.photos[0].fixed} className="w-full" />
                </div>
                <div className="flex flex-col px-2 py-3 text-left">
                  <h3>{node.title}</h3>
                  <p>hi</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    />
  )
}
