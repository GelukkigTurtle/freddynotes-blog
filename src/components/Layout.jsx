import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from 'component/Header'

import 'css/prism-tomorrow.scss'
import 'css/baseLayout.scss'

import favicon32 from "../images/favicon.png";

export default class Layout extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      navList: [
        {
          path: '/posts',
          name: 'post'
        },
        {
          path: '/articles',
          name: 'article'
        },
        {
          path: '/category',
          name: 'category'
        },
        {
          path: '/aboutMe',
          name: 'about me'
        }
      ]
    }
  }

  render() {
    const { location, children } = this.props
    const { navList } = this.state

    return (
      <>
        <Helmet
          title="freddynotes"
          meta={[
            { name: 'description', content: 'freddynotes blog - Freddy Ayala Software Developer' },
            { name: 'keywords', content: 'freddynotes, blog, theme' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1'
            }
          ]}
          link={[
            { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon32}` },
            { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
            { rel: "shortcut icon", type: "image/png", href: `${favicon32}` },
          ]}
        >
          <html lang="en" />
        </Helmet>

        {location.pathname !== '/' && (
          <Header location={location} navList={navList} />
        )}

        <div className="blog-posts-container">{children}</div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query NavQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            path
          }
        }
      }
    }
  }
`
