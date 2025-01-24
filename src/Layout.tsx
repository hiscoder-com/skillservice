import { Outlet } from 'react-router-dom'

function Layout() {
	return (
		<>
			<header className='h-24 bg-gradient-end pl-32 pt-3 fill-white text-white'>
				<img src='/Logo-white.svg' alt='Logo' className='w-20' />
			</header>
			<main className='px-6 py-3'>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
