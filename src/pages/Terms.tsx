import { Classes } from '../constants/ClassesPages'

function Terms() {
  const { TITLE, SUBTITLE, SUBSUBTITLE } = Classes

  return (
    <>
      <h2 className={TITLE}>Terms of Use</h2>
      <h3 className={SUBTITLE}>1. Introduction</h3>
      <p className='mt-3 sm:mt-6'>
        Welcome to Skilldor, operated by <b>GeCraft LLC</b> ("Company," "we,"
        "us," or "our"). These Terms of Use govern your access to and use of
        Skilldor, including any related services, content, and features ("App").
        By accessing or using the App, you agree to be bound by these Terms.
      </p>
      <h3 className={SUBTITLE}>2. Eligibility</h3>
      <p className='mt-3 sm:mt-6'>
        You must be at least 13 years old to use the App. By using Skilldor, you
        confirm that you meet this age requirement. If you are under 13, you
        must have the consent of a parent or guardian.
      </p>
      <h3 className={SUBTITLE}>3. User Account</h3>
      <h4 className={SUBSUBTITLE}>3.1 Registration</h4>
      <p className='mt-3 sm:mt-6'>
        To use certain features of the App, you must create an account by
        providing accurate and complete information. You are responsible for
        maintaining the confidentiality of your login credentials.
      </p>
      <h4 className={SUBSUBTITLE}>3.2 Account Termination</h4>
      <p className='mt-3 sm:mt-6'>
        We reserve the right to suspend or terminate your account if you violate
        these Terms or engage in fraudulent or harmful activities.
      </p>
      <h3 className={SUBTITLE}>4. Acceptable Use</h3>
      <p className='mt-3 sm:mt-6'>
        You agree to use the App in compliance with applicable laws in Georgia.
        Prohibited activities include, but are not limited to:
      </p>
      <div className='mt-3 sm:mt-6'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>
            You agree to use the App in compliance with applicable laws in
            Georgia. Prohibited activities include, but are not limited to:
          </li>
          <li className='list-disc ml-6'>
            Engaging in harassment, hate speech, or illegal activities.
          </li>
          <li className='list-disc ml-6'>
            Using automated scripts or bots without authorization.
          </li>
          <li className='list-disc ml-6'>
            Violating intellectual property rights.
          </li>
        </ul>
      </div>
      <h3 className={SUBTITLE}>5. Intellectual Property Rights</h3>
      <p className='mt-3 sm:mt-6'>
        Skilldor and all related content, logos, trademarks, and proprietary
        software are the property of GeCraft LLC. You may not copy, modify,
        distribute, or exploit any part of the App without our prior written
        consent.
      </p>
      <h3 className={SUBTITLE}>6. Payments and Subscription</h3>
      <p className='mt-3 sm:mt-6'>
        Some features of the App may require payment. By purchasing a
        subscription or one-time service, you agree to our pricing terms and
        authorize us to charge your selected payment method.
      </p>
      <h3 className={SUBTITLE}>7. Privacy Policy</h3>
      <p className='mt-3 sm:mt-6'>
        Your use of the App is also governed by our Privacy Policy. We process
        personal data in accordance with the laws of Georgia.
      </p>
      <h3 className={SUBTITLE}>8. Limitation of Liability</h3>
      <p className='mt-3 sm:mt-6'>
        To the fullest extent permitted by law, GeCraft LLC shall not be liable
        for:
      </p>
      <div className='mt-3 sm:mt-6'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>
            Any indirect, incidental, or consequential damages arising from the
            use of the App.
          </li>
          <li className='list-disc ml-6'>
            Any loss of data or unauthorized access to your account.
          </li>
        </ul>
      </div>
      <h3 className={SUBTITLE}>9. Modifications to Terms</h3>
      <p className='mt-3 sm:mt-6'>
        We reserve the right to update or modify these Terms at any time.
        Changes will be effective upon posting. Continued use of the App
        constitutes acceptance of the revised Terms.
      </p>
      <h3 className={SUBTITLE}>10. Governing Law and Dispute Resolution</h3>
      <p className='mt-3 sm:mt-6'>
        These Terms are governed by the laws of Georgia. Any disputes shall be
        resolved through negotiation. If a resolution cannot be reached,
        disputes will be settled in the courts of Georgia.
      </p>
      <h3 className={SUBTITLE}>11. Contact Information</h3>
      <p className='mt-3 sm:mt-6'>
        If you have any questions about these Terms, you can contact us at:
      </p>
      <p className='mt-3 sm:mt-6'>
        <b>GeCraft LLC</b>
        <br /> Tbilisi, Georgia
        <br /> Email:{' '}
        <a
          href='mailto:support@skilldor.com'
          className='underline text-primary-500'>
          support@skilldor.com
        </a>
        <br /> Website:{' '}
        <a href='https://skilldor.com' className='underline text-primary-500'>
          https://skilldor.com
        </a>
      </p>
    </>
  )
}

export default Terms
