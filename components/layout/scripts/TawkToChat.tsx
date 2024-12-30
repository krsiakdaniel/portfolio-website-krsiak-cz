const TawkToChat = () => {
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/640bc5e331ebfa0fe7f1e3dc/1gr6vq0c0';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      }}
    />
  )
}

export default TawkToChat
