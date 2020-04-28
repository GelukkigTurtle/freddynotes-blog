/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'

import { GlobalState } from './src/components/imageGrid/globalState.js'

export const wrapRootElement = ({ element }) => {
  return <GlobalState>{element}</GlobalState>
}
