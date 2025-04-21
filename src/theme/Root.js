import React from 'react';

export default function Root({children}) {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N449P92M"
          height="0"
          width="0"
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>
      {children}
    </>
  );
}
