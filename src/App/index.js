import React from 'react'
import { css } from 'glamor'
import Header from './Component/Header'

css.global('html, body', {
  fontSize: '16px',
  fontFamily: `'Tangerine', cursive, Helvetica, Arial, sans-serif`,
  backgroundColor: '#fff',
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
})

export default () => <Header fontSize="36">Arokia Raj, The Artist</Header>
