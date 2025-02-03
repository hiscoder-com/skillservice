import React, { useState } from 'react'

import Cookies from 'js-cookie'

import { Modal } from './Modal'
import { CookiesModalProps } from '../types/props'

function CookiesModal({ handleAfterClick, children }: CookiesModalProps) {
  const [modal, setModal] = useState(false)

  const [analytics, setAnalytics] = useState(() => {
    const consent = Cookies.get('userConsent')
    if (consent) {
      return JSON.parse(consent).analytics
    }
    return true
  })
  const [ads, setAds] = useState(() => {
    const consent = Cookies.get('userConsent')
    if (consent) {
      return JSON.parse(consent).ads
    }
    return true
  })

  const handleCustomize = (consent: object) => {
    Cookies.set('userConsent', JSON.stringify(consent), { expires: 365 })
    setModal(false)
    if (typeof handleAfterClick === 'function') {
      handleAfterClick()
    }
  }

  const childrenWithClick = React.Children.map(children, child => {
    if (
      React.isValidElement<{ onClick?: React.MouseEventHandler<HTMLElement> }>(
        child
      )
    ) {
      return React.cloneElement(child, { onClick: () => setModal(true) })
    }
    return child
  })

  const acceptAllHandler = () => {
    setAnalytics(true)
    setAds(true)
    handleCustomize({
      analytics: true,
      ads: true,
      functional: true,
    })
    if (typeof handleAfterClick === 'function') {
      handleAfterClick()
    }
  }

  const savePreferenceHandler = () => {
    handleCustomize({
      functional: true,
      analytics,
      ads,
    })
    if (typeof handleAfterClick === 'function') {
      handleAfterClick()
    }
  }

  return (
    <>
      {childrenWithClick}
      {modal && (
        <Modal setModal={setModal}>
          <div className='rounded-xlarge bg-background p-10 text-semixlarge font-medium text-secondary select-none'>
            <p className='mb-8 font-semibold text-white text-xl'>
              Manage Cookies
            </p>
            <div className='mb-5 flex items-center justify-between gap-4 text-medium text-white'>
              <p>Essential Cookies</p>
              <p className='mr-5 text-small'>Always On</p>
            </div>

            <div className='mb-5 text-medium text-white'>
              <label className='flex items-center justify-between gap-4 cursor-pointer'>
                Analytics Cookies
                <input
                  type='checkbox'
                  onChange={() => {
                    setAnalytics((prev: boolean) => !prev)
                  }}
                  className='peer hidden'
                />
                <span className="relative w-8 h-8 rounded-md inline-block border-4 cursor-pointer border-primary-500 after:hidden after:content-['\2713'] after:absolute after:-top-6 after:left-0 after:text-5xl after:text-primary-300 hover:border-primary-200 peer-checked:after:block peer-checked:border-primary-300 active:border-primary-100 mr-10"></span>
              </label>
            </div>
            <div className='mb-5 text-medium text-white'>
              <label className='flex items-center justify-between gap-4 cursor-pointer'>
                Advertising Cookies
                <input
                  type='checkbox'
                  onChange={() => {
                    setAds((prev: boolean) => !prev)
                  }}
                  className='peer hidden'
                />
                <span className="relative w-8 h-8 rounded-md inline-block border-4 cursor-pointer border-primary-500 after:hidden after:content-['\2713'] after:absolute after:-top-6 after:left-0 after:text-5xl after:text-primary-300 hover:border-primary-200 peer-checked:after:block peer-checked:border-primary-300 active:border-primary-100 mr-10"></span>
              </label>
            </div>
            <div className='mt-12 flex flex-col justify-center gap-6 md:flex-row'>
              <button
                onClick={savePreferenceHandler}
                className='whitespace-nowrap select-none w-full px-6 bg-primary-500 h-[6.29vh] hover:bg-primary-200 hover:text-primary-500 active:bg-primary-100 rounded-lg mt-[2.09vh] font-lexend text-sm md:mt-[1.67vh] md:h-[5.03vh] xl:h-12 xl:mt-4 text-white'>
                Save Preferences
              </button>
              <button
                onClick={acceptAllHandler}
                className='text-primary-500 whitespace-nowrap select-none w-full px-6 bg-primary-300 h-[6.29vh] hover:bg-primary-200  active:bg-primary-100 rounded-lg mt-[2.09vh] font-lexend text-sm md:mt-[1.67vh] md:h-[5.03vh] xl:h-12 xl:mt-4'>
                Accept All Cookies
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default CookiesModal
