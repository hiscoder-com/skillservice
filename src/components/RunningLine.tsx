const RunningLine = () => {
  const SlideElement = () => (
    <span className='select-none animate-ticker shrink-0 px-14 leading-0 flex items-center whitespace-nowrap text-[18.35vh] font-lexend font-medium text-primary-600 md:text-150 xl:text-200 2xl:text-200'>
      Coming this Spring 2025
    </span>
  )

  return (
    <div className='absolute bottom-0 left-0 flex w-full items-center overflow-hidden h-32 md:h-32 xl:h-44'>
      {[...Array(8)].map((_, i) => (
        <SlideElement key={i} />
      ))}
    </div>
  )
}

export default RunningLine
