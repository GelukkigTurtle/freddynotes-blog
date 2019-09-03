import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import ArticleListing from './../components/ArticleListing'

const ArticlesPageInner = props => {
    try {
        const articles = props.data.allMdx ? props.data.allMdx.edges : [];
        return <ArticleListing articles={articles} />
    } catch (e) {
        return <h2>Unable to find any article posts</h2>
    }
}

const ArticlePage = props => {
    return (
        <Layout>
            <ArticlesPageInner {...props} />
        </Layout>
    );
};

export default ArticlePage;


export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "article" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;