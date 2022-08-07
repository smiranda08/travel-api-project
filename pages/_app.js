import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAbn_WBgbM69aXq3XFtFgipqoacEIOIW1U"
      ></script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
