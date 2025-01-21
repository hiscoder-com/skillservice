import { Outlet } from 'react-router-dom'

function Layout() {
	return (
		<div className='px-6'>
			<header>
				<img src='/Logo.svg' alt='Logo' />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
