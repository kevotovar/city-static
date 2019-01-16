import * as React from 'react'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import IndexHero from './components/IndexHero'
import IndexProperties from './components/IndexProperties'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Bienvenido a City Bienes Raíces"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />
    <div className="text-center">
      <IndexHero />
      <IndexProperties />
    </div>
  </Layout>
)

export default IndexPage
