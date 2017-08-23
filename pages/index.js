import glamorous from 'glamorous'
import { rehydrate, css } from 'glamor'
import Divider from '../components/Divider'
import About from '../components/About'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

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

const Container = glamorous.div({
  fontSize: '3rem',
  margin: '.5rem',
  textAlign: 'center'
})

const colorchange = css.keyframes(
  [
    '#b71c1c',
    '#880e4f',
    '#4a148c',
    '#311b92',
    '#1a237e',
    '#0d47a1',
    '#01579b',
    '#006064',
    '#004d40',
    '#1b5e20',
    '#33691e',
    '#827717',
    '#f57f17',
    '#ff6f00',
    '#e65100',
    '#bf360c',
    '#3e2723',
    '#212121',
    '#263238'
  ]
    // .sort(() => 0.5 - Math.random())
    .reduce((o, c, i) => {
      o[`${i * 5.2}%`] = {
        color: c
      }
      return o
    }, {})
)

const Brand = glamorous.h1({
  fontSize: '5rem',
  '@media only screen and (max-width: 768px)': {
    fontSize: '3rem'
  },
  fontWeight: 'normal',
  margin: '0 .5rem',
  animation: `${colorchange} 90s infinite ease-out alternate`
})

export default () =>
  <div>
    <Container>
      <Brand>Rajan, The Artist</Brand>
      <Divider />
      <Gallery />
    </Container>
    <About />
    <Contact />
  </div>
