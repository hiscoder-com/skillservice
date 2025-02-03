import List from '../components/List'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

const base = [
  'Consent: Processing is carried out with your explicit consent.',
  'Contract Performance: Processing is necessary to fulfill a contract or pre-contractual measures.',
  'Legal Obligations: Processing is necessary to comply with applicable laws and regulations in Georgia.',
]
const information = [
  'Registration Data: Email address and password.',
  'Personal Information: Name, age, gender, height, and weight.',
  'Skill and Training Data:',
]

const skillAndTrainingData = [
  'Training frequency, session duration, and skill focus.',
  'Drill completion, repetitions, and session progress.',
  'Optional additional data such as dribbling statistics, shooting success rates, and biometric data (e.g., body fat percentage).',
]

const processYourData = [
  'Authenticate your account.',
  'Generate personalized training plans.',
  'Track and display progress.',
  'Improve app performance and user experience.',
  'Investigate potential policy violations.',
]

const relevantPersonalData = [
  'Name',
  'Email address',
  'Account customer number',
  'Time of download',
  'Payment information',
  'Device identification number',
]

const dataToEnableApp = [
  ' Login data from your mobile device (including the device ID).',
  'Anonymized IP address.',
  'Date and time of access, time zone difference to Greenwich Mean Time (GMT), and access logs/HTTP status codes.',
  'Transmitted data volumes and messages about successful transmissions to your mobile device.',
  'Data generated through your app usage, such as pages visited and search entries.',
]

function Privacy() {
  return (
    <>
      <Title type='h2'>Privacy Policy</Title>
      <Title type='h3'>1. Controller</Title>
      <Paragraph>
        The controller for the purposes of data protection laws applicable in
        Georgia is:
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
      <Title type='h3'>2. General</Title>
      <Title type='h4'>2.1 Scope of Data Processing</Title>
      <Paragraph>
        We process personal data only to the extent necessary to provide a
        functional app and related services. Data is processed with your consent
        unless otherwise permitted by law.
      </Paragraph>
      <Title type='h4'>2.2 Legal Basis for Data Processing</Title>
      <Paragraph>
        Unless otherwise specified, the processing of personal data is based on
        the following legal grounds:
      </Paragraph>
      <List items={base} />
      <Title type='h4'>2.3 Data Deletion and Retention Period</Title>
      <Paragraph>
        Personal data is deleted or anonymized when the purpose for its
        collection is no longer relevant unless retention is required by law or
        for legitimate business purposes, such as contract performance.
      </Paragraph>
      <Title type='h4'>2.4 Marketing and Advertising</Title>
      <Paragraph>
        We may use your personal data to provide tailored content and
        promotions, as permitted by law. Sport and practice data will not be
        used for advertising purposes.
      </Paragraph>
      <Title type='h3'>3. Data You Provide in the App</Title>
      <Title type='h4'>3.1 Description and Scope</Title>
      <Paragraph>
        To use Skilldor, you may need to provide the following information:
      </Paragraph>
      <List items={information} additionalArray={skillAndTrainingData} />
      <Title type='h4'>3.2 Legal Basis</Title>
      <Paragraph>
        Data processing is based on the necessity to provide customized plans
        and app functionality as per contract obligations.
      </Paragraph>
      <Title type='h4'>3.3 Purpose</Title>
      <Paragraph>We process your data to:</Paragraph>
      <List items={processYourData} />
      <Title type='h4'>3.4 Retention Period</Title>
      <Paragraph>
        Data is retained as long as your account remains active. Upon account
        deletion, all associated data will be removed unless retention is
        legally required.
      </Paragraph>
      <Title type='h4'>3.5 Objection and Removal</Title>
      <Paragraph>
        You can request data deletion at any time by deleting your account. Data
        required for legal compliance cannot be deleted upon request.
      </Paragraph>
      <Title type='h3'>4. Provision of the App and Creation of Log Files</Title>
      <Title type='h4'>4.1 Description and Scope of Data Processing</Title>
      <Paragraph>
        To use the Skilldor app, you must be registered with the App Store or
        Google Play Store and provide relevant personal data, such as:
      </Paragraph>
      <List items={relevantPersonalData} />
      <Paragraph>
        Skilldor has no influence over data collection by the app stores and is
        not responsible for it. We process this data only to the extent
        necessary for the execution of the contract.
      </Paragraph>
      <Paragraph>
        When you install the app on your mobile device, we collect the following
        data to enable app functionality and improve future versions:
      </Paragraph>
      <List items={dataToEnableApp} />
      <Paragraph>
        This data is stored separately from all other personal data you provide.
      </Paragraph>
      <Title type='h4'>4.2 Legal Basis for Data Processing</Title>
      <Paragraph>
        The legal basis for processing this data is our legitimate interest in
        ensuring app functionality, stability, and security.
      </Paragraph>
      <Title type='h4'>4.3 Purpose of Data Processing</Title>
      <Paragraph>
        This data is technically necessary to provide app functionality, improve
        performance, and ensure security.
      </Paragraph>
      <Title type='h4'>4.4 Storage Period</Title>
      <Paragraph>
        Data is deleted as soon as it is no longer required for its original
        purpose. Log files are deleted within 7 days unless extended storage is
        necessary, in which case IP addresses are anonymized.
      </Paragraph>
      <Title type='h4'>4.5 Possibility of Objection and Removal</Title>
      <Paragraph>
        Data collection and storage in log files are essential for app
        operation. As such, you cannot object to this processing.
      </Paragraph>
    </>
  )
}

export default Privacy
