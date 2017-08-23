import glamorous from 'glamorous'
import Container from './Container'
import SectionHeader from './SectionHeader'
import Divder from './Divider'
import Para from './Para'

export default () =>
  <Container>
    <SectionHeader>Contact</SectionHeader>
    <Divder />
    <Para>+91 12345 67890</Para>
    <Para>or</Para>
    <Para>email@email.com</Para>
    <Divder />
  </Container>
