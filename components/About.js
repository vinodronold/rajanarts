import glamorous from 'glamorous'
import Container from './Container'
import SectionHeader from './SectionHeader'
import Divder from './Divider'
import Para from './Para'

const MyPicture = glamorous.img({
  height: '10rem',
  borderRadius: '50%',
  display: 'block',
  margin: 'auto'
})

export default () =>
  <Container>
    <SectionHeader>About Me</SectionHeader>
    <Divder />
    <MyPicture src="/static/MyPic.jpg" />
    <Para>
      I am Artist Rajan. I have around 25 years of experience as an artist and specializing in Indian Contemporary art,
      Indian Modern Art, Oil Paintings and Batik. I have learnt most of the techniques from my father.
    </Para>
  </Container>
