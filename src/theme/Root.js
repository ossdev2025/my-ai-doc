import React from 'react';
import Head from '@docusaurus/Head';

export default function Root({children}) {
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-J9JYY1B28K');
          `
        }} />
      </Head>
      {children}
    </>
  );
}
