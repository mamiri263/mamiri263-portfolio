//  Import React
import * as React from 'react'
import Layout from '../components/layout'
import Homepage from '../components/homepage'
import Seo from '../components/seo'


const HomePage = () => {
  return (
    <main>
      <body>
      <Layout>
      </Layout>
      <Homepage>
      </Homepage>
      </body>
    </main>
  )
}



export const Head = () => (
  <>
    <Seo title={"Homepage"}/>
    <Seo />
  </>
)
// Export your component
export default HomePage