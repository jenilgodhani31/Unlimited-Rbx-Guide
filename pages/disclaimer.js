import Disclaimer from "@containers/Disclaimer";
import Head from "next/head";
import { Fragment } from "react";

function generatecode() {
  return (
    <Fragment>
      <Head>
        <title>{"fingameon "}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"></script>
      </Head>
      <div>
        <Disclaimer />
      </div>
    </Fragment>
  );
}

export default generatecode;
