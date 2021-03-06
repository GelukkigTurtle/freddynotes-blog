import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
// import Dimensions from 'react-dimensions';

import 'prismjs/themes/prism-okaidia.css';

import Nav from './../components/Nav';
import Favicon from './../components/Favicon';

import GlobalStyle from './GlobalStyle';

const Main = styled.main`
  max-width: 83rem;
  padding: 1em 1em 2em;
  margin: 0 auto;

  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }

  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`;

const StyledHeader = styled.header``;

const StyledTitle = styled.h1`
  // margin-bottom: 2rem;
  margin: 0.3em 0;

  @media (min-width: 350px) {
    margin: 0.5em 0 0.2em;
  }

  @media (min-width: 520px) {
    margin: 0.667em 0;
  }
`;

const TitleLink = styled(Link)`
  color: #000;
  text-decoration: none;
  border: none;

  &:hover {
    color: #00b22d;
  }
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      <Favicon />

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700"
          rel="stylesheet"
        />
        <title>freddyNotes</title>
        <meta property="og:title" content="freddyNotes" />
        <meta property="og:description" content="Personal Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.freddynotes.com" />
        <meta
          property="og:image"
          content="https://www.freddynotes.com/social-meta.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.freddynotes.com/social-meta.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="freddyNotes" />
        <meta name="twitter:description" content="Personal Website" />
        <meta
          name="twitter:image"
          content="https://www.freddynotes.com/social-meta.png"
        />
      </Helmet>

      <StyledHeader>
        <StyledTitle>
          <TitleLink to="/">freddyNotes /></TitleLink>
        </StyledTitle>

        <Nav />
      </StyledHeader>

      {children}
    </Main>
  );
};

export default Layout;
