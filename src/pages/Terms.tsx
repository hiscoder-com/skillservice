import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

function Terms() {
  return (
    <>
      <Title type='h2'>Terms of Use</Title>
      <Title type='h3'>1. Introduction</Title>
      <Paragraph>
        Welcome to Skilldor, operated by <b>GeCraft LLC</b> ("Company," "we,"
        "us," or "our"). These Terms of Use govern your access to and use of
        Skilldor, including any related services, content, and features ("App").
        By accessing or using the App, you agree to be bound by these Terms.
      </Paragraph>
      <Title type='h3'>2. Eligibility</Title>
      <Paragraph>
        You must be at least 13 years old to use the App. By using Skilldor, you
        confirm that you meet this age requirement. If you are under 13, you
        must have the consent of a parent or guardian.
      </Paragraph>
      <Title type='h3'>3. User Account</Title>
      <Title type='h4'>3.1 Registration</Title>
      <Paragraph>
        To use certain features of the App, you must create an account by
        providing accurate and complete information. You are responsible for
        maintaining the confidentiality of your login credentials.
      </Paragraph>
      <Title type='h4'>3.2 Account Termination</Title>
      <Paragraph>
        We reserve the right to suspend or terminate your account if you violate
        these Terms or engage in fraudulent or harmful activities.
      </Paragraph>
      <Title type='h3'>4. Acceptable Use</Title>
      <Paragraph>
        You agree to use the App in compliance with applicable laws in Georgia.
        Prohibited activities include, but are not limited to:
      </Paragraph>
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
      <Title type='h3'>5. Intellectual Property Rights</Title>
      <Paragraph>
        Skilldor and all related content, logos, trademarks, and proprietary
        software are the property of GeCraft LLC. You may not copy, modify,
        distribute, or exploit any part of the App without our prior written
        consent.
      </Paragraph>
      <Title type='h3'>6. Payments and Subscription</Title>
      <Paragraph>
        Some features of the App may require payment. By purchasing a
        subscription or one-time service, you agree to our pricing terms and
        authorize us to charge your selected payment method.
      </Paragraph>
      <Title type='h3'>7. Privacy Policy</Title>
      <Paragraph>
        Your use of the App is also governed by our Privacy Policy. We process
        personal data in accordance with the laws of Georgia.
      </Paragraph>
      <Title type='h3'>8. Limitation of Liability</Title>
      <Paragraph>
        To the fullest extent permitted by law, GeCraft LLC shall not be liable
        for:
      </Paragraph>
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
      <Title type='h3'>9. Modifications to Terms</Title>
      <Paragraph>
        We reserve the right to update or modify these Terms at any time.
        Changes will be effective upon posting. Continued use of the App
        constitutes acceptance of the revised Terms.
      </Paragraph>
      <Title type='h3'>10. Governing Law and Dispute Resolution</Title>
      <Paragraph>
        These Terms are governed by the laws of Georgia. Any disputes shall be
        resolved through negotiation. If a resolution cannot be reached,
        disputes will be settled in the courts of Georgia.
      </Paragraph>
      <Title type='h3'>11. Contact Information</Title>
      <Paragraph>
        If you have any questions about these Terms, you can contact us at:
      </Paragraph>
      <Paragraph>
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
      </Paragraph>
    </>
  )
}

export default Terms
