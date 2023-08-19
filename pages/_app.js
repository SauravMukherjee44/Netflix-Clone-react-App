import "../styles/globals.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import {SessionProvider} from 'next-auth/react';


function MyApp({ Component, pageProps, session }) {
  return (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
  );
}

export default MyApp;
