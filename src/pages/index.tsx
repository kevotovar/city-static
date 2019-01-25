import * as React from 'react'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import IndexHero from '../components/pages/IndexHero'
import IndexProperties from '../components/pages/IndexProperties'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Bienvenido a City Bienes Raíces"
    />
    <div className="text-center">
      <IndexHero />
      <IndexProperties />
    </div>
  </Layout>
)

export default IndexPage
