import { GA4Initializer } from "@components/gtag";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div style={{
      backgroundImage: "url('/gameImage/bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}>
      <GA4Initializer />
      <div className="bg-white w-full ls:w-[360px] flex md:justify-center md:mx-auto ">

        <NavBar />
      </div>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />

    </div>
  );
}
