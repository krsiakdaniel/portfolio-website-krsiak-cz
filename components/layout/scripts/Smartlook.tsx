import { FC } from 'react'

const Smartlook: FC = (): JSX.Element => {
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          window.smartlook||(function(d) {
          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
          c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
          })(document);
          smartlook('init', 'e52ceb56110b7524270a680095d9fdf52aebffbb', { region: 'eu' });
        `,
      }}
    />
  )
}

export default Smartlook
