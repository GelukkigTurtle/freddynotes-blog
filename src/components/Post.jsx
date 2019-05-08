import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Layout from 'component/Layout'
import { DefaultButton, TagButton } from 'component/Button'

import 'css/post.scss'

export default function Template (props) {
  const { data } = props
  const { html, excerpt, frontmatter } = data.markdownRemark
  const { title, date, tags } = frontmatter

  // Disqus config
  const post = props.data.markdownRemark
  // const siteTitle = get(this.props, "data.site.siteMetadata.title");
  const disqusShortname = 'sseonblogtest'
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title
  }

  return (
    <Layout {...props}>
      <div className="blog-post-container">
        <Helmet
          title={`Sseon Blog - ${title}`}
          meta={[
            { name: 'description', content: `${excerpt}` },
            { name: 'keywords', content: `${tags}` }
          ]}
        />
        <article className="blog-post">
          {/* Title */}
          <h1 className="title">{title}</h1>

          {/* Date */}
          <h2 className="date">{date}</h2>

          {/* Back Button */}
          <div className="backBtn">
            <DefaultButton to={'/posts'}>{'Back'}</DefaultButton>
          </div>

          {/* Contents */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />

          {/* Post Tags */}
          <TagButton list={tags || []} />
        </article>
        {/* 댓글기능 추가 */}
        <article className="blog-post-comment">
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </article>
      </div>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.object
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    imageOne: file(relativePath: { eq: "images/1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "images/2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        tags
        title
      }
    }
  }
`
