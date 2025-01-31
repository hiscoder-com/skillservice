import { Classes } from '../constants/ClassesPages'

function Privacy() {
  const { TITLE, SUBTITLE, SUBSUBTITLE } = Classes

  return (
    <>
      <h2 className={TITLE}>Privacy Policy</h2>
      <h3 className={SUBTITLE}>1. Controller</h3>
      <p className='mt-3 sm:mt-6'>
        The controller for the purposes of data protection laws applicable in
        Georgia is:
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
      <h3 className={SUBTITLE}>2. General</h3>
      <h4 className={SUBSUBTITLE}>2.1 Scope of Data Processing</h4>
      <p className='mt-3 sm:mt-6'>
        We process personal data only to the extent necessary to provide a
        functional app and related services. Data is processed with your consent
        unless otherwise permitted by law.
      </p>
      <h4 className={SUBSUBTITLE}>2.2 Legal Basis for Data Processing</h4>
      <p className='mt-3 sm:mt-6'>
        Unless otherwise specified, the processing of personal data is based on
        the following legal grounds:
      </p>
      <div className='mt-3 sm:mt-6'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>
            Consent: Processing is carried out with your explicit consent.
          </li>
          <li className='list-disc ml-6'>
            Contract Performance: Processing is necessary to fulfill a contract
            or pre-contractual measures.
          </li>
          <li className='list-disc ml-6'>
            Legal Obligations: Processing is necessary to comply with applicable
            laws and regulations in Georgia.
          </li>
          <li className='list-disc ml-6'>
            Legitimate Interests: Processing is necessary for our legitimate
            business interests unless overridden by your rights and freedoms.
          </li>
        </ul>
      </div>
      <h4 className={SUBSUBTITLE}>2.3 Data Deletion and Retention Period</h4>
      <p className='mt-3 sm:mt-6'>
        Personal data is deleted or anonymized when the purpose for its
        collection is no longer relevant unless retention is required by law or
        for legitimate business purposes, such as contract performance.
      </p>
      <h4 className={SUBSUBTITLE}>2.4 Marketing and Advertising</h4>
      <p className='mt-3 sm:mt-6'>
        We may use your personal data to provide tailored content and
        promotions, as permitted by law. Sport and practice data will not be
        used for advertising purposes.
      </p>
      <h3 className={SUBTITLE}>3. Data You Provide in the App</h3>
      <h4 className={SUBSUBTITLE}>3.1 Description and Scope</h4>
      <p className='mt-3 sm:mt-6'>
        To use Skilldor, you may need to provide the following information:
      </p>
      <div className='mt-3 sm:mt-6'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>
            Registration Data: Email address and password.
          </li>
          <li className='list-disc ml-6'>
            Personal Information: Name, age, gender, height, and weight.
          </li>
          <li className='list-disc ml-6'>
            Skill and Training Data:
            <ul className='flex flex-col gap-3'>
              <li className='list-disc ml-6 marker:text-primary-600'>
                Training frequency, session duration, and skill focus.
              </li>
              <li className='list-disc ml-6 marker:text-primary-600'>
                Drill completion, repetitions, and session progress.
              </li>
              <li className='list-disc ml-6 marker:text-primary-600'>
                Optional additional data such as dribbling statistics, shooting
                success rates, and biometric data (e.g., body fat percentage).
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h4 className={SUBSUBTITLE}>3.2 Legal Basis</h4>
      <p className='mt-3 sm:mt-6'>
        Data processing is based on the necessity to provide customized plans
        and app functionality as per contract obligations.
      </p>
      <h4 className={SUBSUBTITLE}>3.3 Purpose</h4>
      <p className='mt-3 sm:mt-6'>We process your data to:</p>
      <div className='mt-3 sm:mt-6'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>Authenticate your account.</li>
          <li className='list-disc ml-6'>
            Generate personalized training plans.
          </li>
          <li className='list-disc ml-6'>Track and display progress.</li>
          <li className='list-disc ml-6'>
            Improve app performance and user experience.
          </li>
          <li className='list-disc ml-6'>
            Investigate potential policy violations.
          </li>
        </ul>
      </div>
      <h4 className={SUBSUBTITLE}>3.4 Retention Period</h4>
      <p className='mt-3 sm:mt-6'>
        Data is retained as long as your account remains active. Upon account
        deletion, all associated data will be removed unless retention is
        legally required.
      </p>
      <h4 className={SUBSUBTITLE}>3.5 Objection and Removal</h4>
      <p className='mt-3 sm:mt-6'>
        You can request data deletion at any time by deleting your account. Data
        required for legal compliance cannot be deleted upon request.
      </p>
      <h3 className={SUBTITLE}>
        4. Provision of the App and Creation of Log Files
      </h3>
      <h4 className={SUBSUBTITLE}>
        4.1 Description and Scope of Data Processing
      </h4>
      <p className='mt-3 sm:mt-6'>
        To use the Skilldor app, you must be registered with the App Store or
        Google Play Store and provide relevant personal data, such as:
      </p>
      <div className='mt-3 sm:mt-6'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>Name</li>
          <li className='list-disc ml-6'>Email address</li>
          <li className='list-disc ml-6'>Account customer number</li>
          <li className='list-disc ml-6'>Time of download</li>
          <li className='list-disc ml-6'>Payment information</li>
          <li className='list-disc ml-6'>Device identification number</li>
        </ul>
      </div>
      <p className='mt-3 sm:mt-6'>
        Skilldor has no influence over data collection by the app stores and is
        not responsible for it. We process this data only to the extent
        necessary for the execution of the contract.
      </p>
      <p className='mt-3 sm:mt-6'>
        When you install the app on your mobile device, we collect the following
        data to enable app functionality and improve future versions:
      </p>
      <div className='mt-3 sm:mt-6'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>
            Login data from your mobile device (including the device ID).
          </li>
          <li className='list-disc ml-6'>Anonymized IP address.</li>
          <li className='list-disc ml-6'>
            Date and time of access, time zone difference to Greenwich Mean Time
            (GMT), and access logs/HTTP status codes.
          </li>
          <li className='list-disc ml-6'>
            Transmitted data volumes and messages about successful transmissions
            to your mobile device.
          </li>
          <li className='list-disc ml-6'>
            Data generated through your app usage, such as pages visited and
            search entries.
          </li>
        </ul>
      </div>
      <p className='mt-3 sm:mt-6'>
        This data is stored separately from all other personal data you provide.
      </p>
      <h4 className={SUBSUBTITLE}>4.2 Legal Basis for Data Processing</h4>
      <p className='mt-3 sm:mt-6'>
        The legal basis for processing this data is our legitimate interest in
        ensuring app functionality, stability, and security.
      </p>
      <h4 className={SUBSUBTITLE}>4.3 Purpose of Data Processing</h4>
      <p className='mt-3 sm:mt-6'>
        This data is technically necessary to provide app functionality, improve
        performance, and ensure security.
      </p>
      <h4 className={SUBSUBTITLE}>4.4 Storage Period</h4>
      <p className='mt-3 sm:mt-6'>
        Data is deleted as soon as it is no longer required for its original
        purpose. Log files are deleted within 7 days unless extended storage is
        necessary, in which case IP addresses are anonymized.
      </p>
      <h4 className={SUBSUBTITLE}>4.5 Possibility of Objection and Removal</h4>
      <p className='mt-3 sm:mt-6'>
        Data collection and storage in log files are essential for app
        operation. As such, you cannot object to this processing.
      </p>
    </>
  )
}

export default Privacy
