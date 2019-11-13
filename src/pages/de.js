import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const heading = get(this, 'props.data.contentfulFoo')
    console.log(heading)
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section-headline">{heading.bar}</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const FooQuery = graphql`
  query FooQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulFoo(node_locale: { eq: "de" }) {
      id
      bar
      node_locale
    }
  }
`
