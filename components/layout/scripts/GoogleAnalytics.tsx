const GoogleAnalytics = (): JSX.Element => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NC44T6F2TL"></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NC44T6F2TL');
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
