function Social() {
  const icons = [
  {
    icon: 'instagram.svg',
    link: 'https://www.instagram.com/skilldorcom',
    alt: 'instagram'
  },
  {
    icon: 'tik tok.svg',
    link: '#',
    alt: 'tik tok'
  },
  {
    icon: 'youtube.svg',
    link: '#',
    alt: 'youtube'
  },
  {
    icon: 'X.svg',
    link: '#',
    alt: 'X'
  }
]

  return (
    <div className='flex mt-[1.6vh]'>
      {icons.map(icon => (
        <a href={icon.link} target='_blank'>
          <img
            src={icon.icon}
            alt={icon.alt}
            className='p-2 w-[5.55vh] md:w-[6vh] xl:w-[6.5vh] 2xl:w-[5.6vh]'
          />
        </a>
      ))}
    </div>
  )
}

export default Social
