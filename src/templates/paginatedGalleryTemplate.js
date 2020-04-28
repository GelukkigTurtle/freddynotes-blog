import React from 'react'
import { GlobalStateContext } from '../components/imageGrid/globalState.js'
import View from '../components/imageGrid/view.js'
import { exitFullScreen } from '../util/fullScreenHelpers.js'
// import Footer from '../components/imageGrid/footer.js'
import styled from 'styled-components'
import Layout from '../components/Layout'

const StyledContainer = styled.div`
  height: 350px;

  @media (min-width: 520px) {
    height: 400px;
  }

  @media (min-width: 1400px) {
    height: 500px;
  }
`

class PaginatedGalleryTemplate extends React.Component {
  componentDidMount () {
    exitFullScreen()
  }

  render () {
    const highlight =
      this.props.location && this.props.location.state
        ? this.props.location.state.highlight
        : -1
    return (
      <>
        <Layout>
          <StyledContainer>
            <GlobalStateContext.Consumer>
              {globalState => (
                <>
                  <View
                    globalState={globalState}
                    pageContext={this.props.pageContext}
                    highlight={highlight}
                  />
                </>
              )}
            </GlobalStateContext.Consumer>
          </StyledContainer>
        </Layout>
      </>
    )
  }
}

export default PaginatedGalleryTemplate
