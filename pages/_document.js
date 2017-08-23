import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charset="UTF-8" />
          <meta name="description" content="Rajan, The Artist" />
          <meta name="keywords" content="Arokiaraj,Rajan,Arts,Oil Paint,Modern Art,Batik,Contemporary Art,Indian Contemporary Art,Indian Artist,Chennai Artist" />
          <meta name="author" content="Vinod Ronold" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta property="og:title" content="Rajan, The Artist"/>
          <meta property="og:image" content="https://rajanarts.now.sh/static/apple-touch-icon.png"/>
          <meta property="og:site_name" content="rajanarts"/>
          <meta property="og:description" content="Specialist in Indian Contemporary art, Indian Modern Art, Oil Paintings and Batik"/>           
          <link rel="apple-touch-icon" sizes="120x120" href="./static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./static/favicon-16x16.png" />
          <link rel="manifest" href="./static/manifest.json" />
          <meta name="theme-color" content="#ffffff" />
          <title>Rajan, The Artist</title>
          <link href="https://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
