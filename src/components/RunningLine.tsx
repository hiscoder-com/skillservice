import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const RunningLine = () => {
	const textRef = useRef(null)
	const spanRef = useRef<HTMLSpanElement | null>(null)

	useLayoutEffect(() => {
		gsap.fromTo(
			textRef.current,
			{ x: 0 },
			{
				x: -spanRef.current!.clientWidth + 'px',
				duration: 5,
				repeat: -1,
				ease: 'none',
			}
		)
	}, [])

	const SlideElement = () => (
		<span
			ref={spanRef}
			className='flex items-center whitespace-nowrap text-8xl font-lexend font-medium w-full text-primary-50 md:text-150 2xl:text-200'>
			Coming soon&nbsp;&nbsp;
		</span>
	)

	return (
		<div className='flex w-full items-center overflow-hidden h-32 mt-4 md:mt-9 md:h-48 xl:mt-44 2xl:h-64 2xl:mt-28'>
			<div ref={textRef} className='flex items-center'>
				{[...Array(6)].map((_, i) => (
					<SlideElement key={i} />
				))}
			</div>
		</div>
	)
}

export default RunningLine
