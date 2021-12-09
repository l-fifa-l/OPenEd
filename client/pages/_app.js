import '../styles/tailwind.css'
// provide a component for dark-mode
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp