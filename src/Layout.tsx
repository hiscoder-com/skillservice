import { Outlet } from 'react-router-dom'

import CookiesBanner from './components/CookiesBanner'

function Layout() {
  return (
    <>
      <header className='h-24 bg-primary-600 pl-10 md:pl-32 pt-3 fill-white text-white'>
        <img src='/Logo-white.svg' alt='Logo' className='w-20' />
      </header>
      <main className='px-3 py-3 md:px-6 md:py-10'>
        <Outlet />
      </main>
      <CookiesBanner />
    </>
  )
}

export default Layout
