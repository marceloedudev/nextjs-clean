import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

import React from 'react'
import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styledComponentsAdapter = new StyledComponentsAdapter()

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} />
        })
      }
      const page = await ctx.renderPage()
      const { css, ids } = await styledComponentsAdapter.renderStatic(page.html)
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment key="styles">
            {initialProps.styles}{' '}
            <style
              data-emotion={`css ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          </React.Fragment>
        )
      } as DocumentInitialProps & any
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            type="text/css"
            href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
