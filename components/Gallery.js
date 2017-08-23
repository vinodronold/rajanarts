import glamorous from 'glamorous'

const Wapper = glamorous.div({
  display: 'grid',
  gridGap: '1rem',
  margin: '3rem 1rem',
  gridTemplateColumns: 'repeat(4, 1fr)',
  '@media only screen and (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)'
  }
})

const Pics = glamorous.img({
  backgroundColor: '#ddd',
  maxWidth: '100%',
  maxHeight: '100%'
})

export default () =>
  <Wapper>
    {Array(8).fill(1).map((_, i) => <Pics key={i} src={`/static/gallery/${i + 1}.jpg`} />)}
  </Wapper>
