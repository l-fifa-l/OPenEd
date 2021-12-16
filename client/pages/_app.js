import '../styles/tailwind.css'
// provide a component for dark-mode
import { ThemeProvider } from 'next-themes'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ToastContainer position='top-center'/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp