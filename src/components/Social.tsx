function Social() {
	const icons = [
		{
			icon: 'instagram.svg',
			link: '#',
			alt: 'instagram',
		},
		{
			icon: 'tik tok.svg',
			link: '#',
			alt: 'tik tok',
		},
		{
			icon: 'youtube.svg',
			link: '#',
			alt: 'youtube',
		},
		{
			icon: 'X.svg',
			link: '#',
			alt: 'X',
		},
	]

	return (
		<div className='flex mt-[1.6vh]'>
			{icons.map(icon => (
				<a href={icon.link} target='_blank'>
					<img
						src={icon.icon}
						alt={icon.alt}
						className='p-2 w-[5.55vh] h-[5.55vh] md:w-[6vh] md:h-[6vh] xl:w-[6.5vh] xl:h-[6.5vh] 2xl:w-[5.6vh] 2xl:h-[5.6vh] hover:animate-hoverIcon hover:scale-110'
					/>
				</a>
			))}
		</div>
	)
}

export default Social
