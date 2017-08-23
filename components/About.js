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
      Painting is the basic subsistence of my life. Painting is my source of strength to conquer the most lamentable
      circumstances of life. Life is full of incidents and events. Incidents of struggle, suffering, grief, sorrow,
      dejection, regret, depression, misery and events of delight, pleasure, joyfulness, jubilation, triumph. Apart from
      incidents, there is observation. I observe everything: human to animals, nature to buildings, motion of river to
      stable towers.
    </Para>
    <para>
      I want every painting to speak for itself. I like to go out a lot, to observe phenomenon, to capture the emotions
      of community on canvas. My paintings are meant to be a heart-to-heart communication with the audience who sees
      them. I want the common man to be able to understand my work and relate to it. I’ve tried to do, with every new
      series showing something completely different from all my previous work. I am an artist who is not afraid of
      change.
    </para>
  </Container>
