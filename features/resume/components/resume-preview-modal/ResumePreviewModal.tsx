'use client'

import { useEffect, useRef, useState } from 'react'

import { Maximize2, Minimize2, X } from 'lucide-react'
import mammoth from 'mammoth'
import { Document, Page, pdfjs } from 'react-pdf'
import { Tooltip } from 'react-tooltip'

import { ResumeFileTypeEnum } from '@/lib/types/enums'

import { type ResumePreviewModalProps } from './ResumePreviewModal.types'
import { PDF_WORKER_SRC } from './ResumePreviewModal.utils'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC

const ResumePreviewModal = ({
  isOpen,
  onClose,
  fileType,
  href,
  title,
}: ResumePreviewModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const hasLoadedDocx = useRef(false)
  const [numPages, setNumPages] = useState(0)
  const [docxHtml, setDocxHtml] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [pdfError, setPdfError] = useState('')
  const [docxError, setDocxError] = useState('')
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const backdrop = backdropRef.current
    if (!backdrop) return

    const onBackdropClick = (e: MouseEvent) => {
      if (e.target === backdrop) onClose()
    }

    backdrop.addEventListener('click', onBackdropClick)
    return () => backdrop.removeEventListener('click', onBackdropClick)
  }, [onClose])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      dialog.showModal()
      dialog.focus()
      document.body.style.overflow = 'hidden'

      if (fileType === ResumeFileTypeEnum.DOCX && !hasLoadedDocx.current) {
        hasLoadedDocx.current = true
        setIsLoading(true)

        const loadDocx = async () => {
          try {
            const response = await fetch(href)
            const arrayBuffer = await response.arrayBuffer()
            const result = await mammoth.convertToHtml({ arrayBuffer })
            setDocxHtml(result.value)
          } catch (error: unknown) {
            setDocxError(error instanceof Error ? error.message : 'Failed to load document')
          } finally {
            setIsLoading(false)
          }
        }

        void loadDocx()
      }
    } else {
      dialog.close()
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, fileType, href])

  const handleDialogClose = () => {
    setIsFullscreen(false)
    onClose()
  }

  const fileTypeSuffix = fileType.toLowerCase()

  const renderDialogContent = () => {
    if (fileType === ResumeFileTypeEnum.PDF) {
      return (
        <>
          {pdfError && <p className="py-4 text-center text-sm text-red-600">Error: {pdfError}</p>}
          <Document
            file={href}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages)
              setPdfError('')
            }}
            onLoadError={(error) => setPdfError(error.message)}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page key={i + 1} pageNumber={i + 1} width={750} className="mb-4 shadow" />
            ))}
          </Document>
        </>
      )
    }

    if (isLoading) {
      return <p className="py-12 text-center text-gray-500">Loading preview…</p>
    }

    if (docxError) {
      return <p className="py-4 text-center text-sm text-red-600">Error: {docxError}</p>
    }

    return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: docxHtml }} />
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      tabIndex={-1}
      aria-labelledby="modal-title"
      aria-modal="true"
      data-testid={`resume-preview-dialog-${fileTypeSuffix}`}
      className="m-0 h-screen w-screen max-w-none bg-transparent p-0 outline-none backdrop:bg-black/90"
    >
      <div ref={backdropRef} className="flex h-screen w-full items-center justify-center">
        <div
          className={`flex w-full flex-col overflow-hidden bg-white shadow-xl transition-[max-width,max-height,margin,border-radius] duration-300 ease-in-out ${
            isFullscreen
              ? 'mx-0 h-full max-h-screen max-w-[100vw] rounded-none'
              : 'mx-4 max-h-[90vh] max-w-4xl rounded-lg sm:mx-8'
          }`}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
              {title}
            </h2>
            <div className="flex items-center gap-1">
              <Tooltip id="modal-fullscreen-tooltip" place="left" className="z-9999 select-none" />
              <button
                onClick={() => setIsFullscreen((prev) => !prev)}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                data-testid={`resume-preview-button-fullscreen-${fileTypeSuffix}`}
                data-tooltip-id="modal-fullscreen-tooltip"
                data-tooltip-content={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                className="rounded p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-violet-400"
              >
                {isFullscreen ? (
                  <Minimize2 className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Maximize2 className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
              <button
                onClick={onClose}
                aria-label="Close preview"
                data-testid={`resume-preview-button-close-${fileTypeSuffix}`}
                className="rounded p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-violet-400"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            className={`flex-1 overflow-y-auto p-6 ${isFullscreen ? 'flex flex-col items-center' : ''}`}
          >
            {renderDialogContent()}
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default ResumePreviewModal
