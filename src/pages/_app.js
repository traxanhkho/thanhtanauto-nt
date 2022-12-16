import "font-awesome/css/font-awesome.min.css";
import { useRouter } from "next/router";
import UiProvider, { uicontext } from "../context/UIcontext";
import { useContext } from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Call from "../components/common/Call";
import "../styles/globals.scss";
import "../styles/style.scss";
import SlideOver from "../components/SlideOver";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <UiProvider>
        {router.pathname !== "/404" && <Header />}
        <Component {...pageProps} />
        <Call />
        <SlideOver />
        {router.pathname !== "/404" && <Footer />}
      </UiProvider>
    </>
  );
}

export default MyApp;
