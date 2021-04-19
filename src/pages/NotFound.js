import Footer from "parts/Footer";
import Header from "parts/Header";
import PageErrorMessages from "parts/PageErrorMessages";
import Sitemap from "parts/Sitemap";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMessages />
      <Sitemap />
      <Footer />
    </>
  );
}
