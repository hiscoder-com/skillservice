const RunningLine = () => {
	const SlideElement = () => (
		<span className=' animate-ticker shrink-0 px-14 flex items-center whitespace-nowrap text-[10.8vh] font-lexend font-medium text-primary-600 md:text-150 2xl:text-200'>
			Coming this Winter 2025
		</span>
	)

	return (
		<div className='absolute bottom-0 left-0 flex w-full items-center overflow-hidden h-32 mt-4 md:mt-9 md:h-48 xl:mt-44 2xl:h-64 2xl:mt-28'>
			{[...Array(8)].map((_, i) => (
				<SlideElement key={i} />
			))}
		</div>
	)
}

export default RunningLine
