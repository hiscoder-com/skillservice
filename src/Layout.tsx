import { Outlet } from 'react-router-dom'

import CookiesBanner from './components/CookiesBanner'

function Layout() {
  return (
    <div className='h-full'>
      <header className='h-24 bg-primary-600 pl-10 md:pl-32 pt-3 fill-white text-white'>
        <a href='/'>
          <img src='/logo-white.svg' alt='Logo' className='w-20' />
        </a>
      </header>
      <main className='px-3 py-3 md:px-6 md:py-10 max-w-[120rem] mx-auto'>
        <Outlet />
      </main>
      <CookiesBanner />
      {/* <footer className='h-12 bg-primary-600'></footer> */}
    </div>
  )
}

export default Layout
