import React from "react";
import Head from "next/head";

export default function Page({ title, description, keywords, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </React.Fragment>
  );
}

Page.defaultProps = {
  title: "Dev Hunt",
  description:
    "A community to help new developers to work together, collaborate and get hired.",
  keywords:
    "self taugh web developer, web development, web development projects",
};
