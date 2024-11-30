import Photo from '@/components/aboutMe/Photo'
import DividerWithText from '@/components/shared/DividerWithText'
import vcardQRcode from '@/public/images/svg/vcard-qr-code.svg'
import Image from 'next/image'

const ContactVcard = () => {
  return (
    <div className="mt-20">
      <DividerWithText text="Contact me" />
      <div className="mt-5">
        <Photo />
      </div>
      <div className="mt-20">
        <DividerWithText text="Add me to your contacts" />
        <div className="mb-20 mt-5 flex flex-col items-center justify-center sm:flex-row">
          <Image src={vcardQRcode} alt="contact QR code" width={256} height={256} />
        </div>
      </div>
    </div>
  )
}

export default ContactVcard
