import { EXTERNAL_URL } from '@/utils/constants/urls/externalUrls'

const ResumePreviewEmbed = () => {
  return (
    <div className="mt-16">
      <iframe
        src={EXTERNAL_URL.resume.resumeEmbedPreviewPDF}
        width="100%"
        height="1400"
        allow="autoplay"
        className="border bg-black p-2"
      ></iframe>
    </div>
  )
}

export default ResumePreviewEmbed
