import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-mdx';
import { DiscussionEmbed } from "disqus-react"

import Layout from './../components/Layout';



const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`;

const PostTemplate = ({ data }) => {
  const { frontmatter, code } = data.mdx;
  // Disqus config
  const disqusShortname = 'freddynotes.com'
  const disqusConfig = {
    identifier: frontmatter.id,
    title: frontmatter.title
  }

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>Freddy Ayala | {frontmatter.title}</title>
        </Helmet>
      )}
      {frontmatter.title && (
        <Helmet>
          <meta property="og:title" content={frontmatter.title} />
          <meta name="twitter:title" content={frontmatter.title} />
        </Helmet>
      )}
      {frontmatter.excerpt && (
        <Helmet>
          <meta property="og:description" content={frontmatter.excerpt} />
          <meta name="twitter:description" content={frontmatter.excerpt} />
        </Helmet>
      )}
      <h1>{frontmatter.title}</h1>
      <MDXRenderer>{code.body}</MDXRenderer>
      <StyledPostDate>{frontmatter.date}</StyledPostDate>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        excerpt
      }
      code {
        body
      }
    }
  }
`;
