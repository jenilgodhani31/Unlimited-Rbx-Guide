import HowToGet from "@containers/howToGet";
import Head from "next/head";
import { Fragment } from "react";

function howtoget() {
  return (
    <Fragment>
      <Head>
        <title>{"Rbx Total Guide "}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"></script>
      </Head>
      <div>
        <HowToGet />
      </div>
    </Fragment>
  );
}

export default howtoget;
