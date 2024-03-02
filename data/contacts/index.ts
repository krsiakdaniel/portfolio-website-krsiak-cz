import gmail from '@/public/images/illustrations/gmail.png'
import linkedin from '@/public/images/illustrations/linkedin.png'
import phone from '@/public/images/illustrations/phone.png'

import { EMAIL_HREF, EMAIL_TEXT, LINK_LINKEDIN, PHONE_HREF, PHONE_TEXT } from '@/utils/constants'

import { Contact } from '@/utils/types'

export const contacts: Contact[] = [
  {
    image: phone.src,
    heading: 'Phone',
    description: 'Time zone GMT+1',
    href: PHONE_HREF,
    linkText: PHONE_TEXT,
  },
  {
    image: gmail.src,
    heading: 'Email',
    description: 'I read it daily',
    href: EMAIL_HREF,
    linkText: EMAIL_TEXT,
  },
  {
    image: linkedin.src,
    heading: 'LinkedIn',
    description: 'Easy and fast',
    href: LINK_LINKEDIN,
    linkText: 'Send me message',
  },
]
