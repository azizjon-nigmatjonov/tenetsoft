import React, { useMemo } from "react";
import Head from "next/head";
import { ProjectName } from "@/contants/website"; // Make sure this path is correct.

interface Props {
  title: string;
}

export default function SEO({ title }: Props) {
  const metaTitle = useMemo(() => {
    return `${title} - ${ProjectName}`;
  }, [title]);

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
      <meta
        name="description"
        content="Get accurate and up-to-date weather forecasts for any location. Check current conditions, hourly and weekly forecasts, and stay prepared for any weather."
      />
      <meta
        name="keywords"
        content="weather, weather forecast, current weather, hourly forecast, weekly forecast, weather conditions, temperature, rainfall, wind speed, weather alerts"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} key="ogtitle" />
      <meta
        property="og:description"
        content="Get accurate and up-to-date weather forecasts for any location. Check current conditions, hourly and weekly forecasts, and stay prepared for any weather."
        key="ogdesc"
      />
      <meta property="og:site_name" content={metaTitle} key="ogsitename" />
      <meta property="og:image" content="/images/cloud.png" key="ogimage" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta
        name="twitter:description"
        content="Get accurate and up-to-date weather forecasts for any location. Check current conditions, hourly and weekly forecasts, and stay prepared for any weather."
      />
      <meta name="twitter:site" content={metaTitle} />
      <meta name="twitter:creator" content="Mukhammadaziz Nigmatjonov" />
      <meta name="twitter:image" content="/images/cloud.png" />
      <link rel="icon" href="/images/ux.svg" />
    </Head>
  );
}
