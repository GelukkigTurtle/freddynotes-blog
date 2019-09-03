import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from './../components/Layout';
import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';
import { DiscussionEmbed } from "disqus-react"

const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`;

const ArticleTemplate = ({ data }) => {
    const { frontmatter, code } = data.mdx;
    // Disqus config
    const disqusShortname = 'freddynotes'
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
            <h1>{frontmatter.title}</h1>
            <ProjectLinks
                link={frontmatter.link}
                repo={frontmatter.repo}
                date={frontmatter.date}
                lang={frontmatter.lang}
            />
            <TextPostBody>
                <MDXRenderer>{code.body}</MDXRenderer>
            </TextPostBody>
            <StyledPostDate>{frontmatter.date}</StyledPostDate>
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Layout>
    );
};

export default ArticleTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      frontmatter {
        title
        link
        repo
        date
        lang
      }
    }
  }
`;
