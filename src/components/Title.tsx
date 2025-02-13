type HeadingLevel = 'h2' | 'h3' | 'h4'

interface TitleProps {
  children: string
  type: HeadingLevel
}

function Title({ children, type }: TitleProps) {
  return (
    <>
      {type === 'h2' && (
        <h2 className='text-2xl font-semibold text-primary-500 sm:text-3xl'>
          {children}
        </h2>
      )}
      {type === 'h3' && (
        <h3 className='text-xl font-semibold mt-6 text-primary-500 sm:text-2xl sm:mt-12'>
          {children}
        </h3>
      )}
      {type === 'h4' && (
        <h4 className='font-semibold mt-3 sm:mt-6'>{children}</h4>
      )}
    </>
  )
}

export default Title
