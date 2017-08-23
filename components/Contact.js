import glamorous from 'glamorous'
import Container from './Container'
import SectionHeader from './SectionHeader'
import Divder from './Divider'
import Para from './Para'

export default () =>
  <Container>
    <SectionHeader>Contact</SectionHeader>
    <Divder />
    <Para>Please email me @ <a href="mailto:inforajanart@gmail.com" target="_top">inforajanart</a></Para>
    <Divder />
  </Container>
