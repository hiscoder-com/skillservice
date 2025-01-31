import { Classes } from '../constants/ClassesPages'

function Legal() {
  const { TITLE, SUBTITLE, SUBSUBTITLE } = Classes

  return (
    <>
      <h2 className={TITLE}>Legal Notice</h2>
      <h3 className={SUBTITLE}>GeCraft LLC</h3>
      <p className='my-8 sm:mt-16'>
        <b>Email:</b> Contact Us
      </p>
      <h3 className={SUBTITLE}>Disclaimer</h3>
      <h4 className={SUBSUBTITLE}>Liability for Content</h4>
      <p className='mt-3 sm:mt-6'>
        As a service provider, Skilldor is responsible for the content we create
        and display on this platform in accordance with applicable laws. We are
        not obligated to monitor external information transmitted or stored on
        our platform, nor are we required to investigate circumstances that
        suggest illegal activities.
      </p>
      <p className='mt-3 sm:mt-6'>
        Obligations to remove or block the use of information as required by law
        remain unaffected. Liability for such matters is possible only from the
        moment we become aware of a specific infringement. Upon notification of
        such violations, we will act promptly to remove the offending content.
      </p>
      <h4 className={SUBSUBTITLE}>Liability for Links</h4>
      <p className='mt-3 sm:mt-6'>
        Skilldor may contain links to external websites operated by third
        parties, over whose content we have no control. Therefore, we disclaim
        any responsibility or liability for such external content. The
        respective providers or operators of linked websites are solely
        responsible for their content. At the time of linking, we reviewed the
        pages for any potential legal violations and found none.
      </p>
      <p className='mt-3 sm:mt-6'>
        Continuous monitoring of linked websites is not feasible without
        specific indications of legal infringement. If any violations come to
        our attention, we will remove the corresponding links immediately.
      </p>
      <h3 className={SUBTITLE}>Copyright</h3>
      <p className='mt-3 sm:mt-6'>
        All content and works created by Skilldor on this platform are protected
        under Republic of Georgia copyright law. Any reproduction, editing,
        distribution, or exploitation outside the limits of copyright requires
        prior written consent from the respective author or creator. Downloads
        and copies of content are permitted only for private, non-commercial
        use.
      </p>
      <p className='mt-3 sm:mt-6'>
        Where content on this platform is not created by Skilldor, the
        copyrights of third parties are respected, and such content is clearly
        identified. If you believe there is a copyright infringement, please
        notify us promptly. Upon confirmation of any violations, we will act
        swiftly to remove the infringing material.
      </p>
    </>
  )
}

export default Legal
