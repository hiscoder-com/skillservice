import { useEffect, useState } from 'react'

import Cookies from 'js-cookie'

import CookiesModal from './CookiesModal'

function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false)

  const handleAcceptAll = () => {
    Cookies.set(
      'userConsent',
      JSON.stringify({
        analytics: true,
        ads: true,
        functional: true,
      }),
      { expires: 365 }
    )
    setShowBanner(false)
  }

  useEffect(() => {
    const consent = Cookies.get('userConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])
  return (
    <>
      {showBanner && (
        <div className='fixed bottom-0 left-0 right-0 z-40 bg-primary-400/80 p-4 text-white'>
          <div className='container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-small select-none'>
              We use cookies to improve your experience and deliver personalized
              content. You can customize the use of cookies or accept all
              cookies. Read more in our{' '}
              <a href='/privacy-policy' className='underline'>
                Privacy Policy
              </a>
              .
            </p>
            <div className='mt-3 flex gap-4 md:mt-0'>
              <CookiesModal handleAfterClick={() => setShowBanner(false)}>
                <button className='whitespace-nowrap select-none w-full px-6 bg-primary-500 h-[6.29vh] hover:bg-primary-200 hover:text-primary-500 active:bg-primary-100 rounded-lg mt-[2.09vh] font-lexend text-sm md:mt-[1.67vh] md:h-[5.03vh] xl:h-12 xl:mt-4 text-white'>
                  Manage Cookies
                </button>
              </CookiesModal>
              <button
                type='button'
                onClick={handleAcceptAll}
                className='text-primary-500 whitespace-nowrap select-none w-full px-6 bg-primary-300 h-[6.29vh] hover:bg-primary-200  active:bg-primary-100 rounded-lg mt-[2.09vh] font-lexend text-sm md:mt-[1.67vh] md:h-[5.03vh] xl:h-12 xl:mt-4'>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookiesBanner
