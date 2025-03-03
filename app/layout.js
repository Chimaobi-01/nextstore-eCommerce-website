import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'
import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Header />
          { children }
          <Footer />
        </Layout>
      </body>
    </html>
  )
}
