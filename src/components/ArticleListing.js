import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const DateSpan = styled.span`
  display: none;
  color: #999;
  margin-left: 0.5em;

  @media (min-width: 520px) {
    display: inline;
  }
`;

const StyledBlogListing = styled.ul`
  list-style: none;
`;

const StyledBlogItem = styled.li`
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 0.5em;
`;
const StyledBlogLink = styled(Link)``;

const ArticleListing = ({ articles }) => {
    const articleLinks = articles.map(article => {
        return (
            <StyledBlogItem key={article.node.fields.slug}>
                <StyledBlogLink to={article.node.fields.slug}>
                    {article.node.frontmatter.title}
                </StyledBlogLink>
                <DateSpan>({article.node.frontmatter.date})</DateSpan>
            </StyledBlogItem>
        );
    });

    return <StyledBlogListing>{articleLinks}</StyledBlogListing>;
};

export default ArticleListing;
