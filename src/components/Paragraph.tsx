import { ReactNode } from 'react'

interface ParagraphProps {
  children: string | ReactNode
}

function Paragraph({ children }: ParagraphProps) {
  return <p className='mt-3 sm:mt-6'>{children}</p>
}

export default Paragraph
