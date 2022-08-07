import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        <body className="m-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
