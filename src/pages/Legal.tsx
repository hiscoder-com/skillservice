import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

function Legal() {
  return (
    <>
      <Title type='h2'>Legal Notice</Title>
      <Title type='h3'>GeCraft LLC</Title>
      <p className='my-8 sm:mt-16'>
        <b>Email:</b> Contact Us
      </p>
      <Title type='h3'>Disclaimer</Title>
      <Title type='h4'>Liability for Content</Title>
      <Paragraph>
        As a service provider, Skilldor is responsible for the content we create
        and display on this platform in accordance with applicable laws. We are
        not obligated to monitor external information transmitted or stored on
        our platform, nor are we required to investigate circumstances that
        suggest illegal activities.
      </Paragraph>
      <Paragraph>
        Obligations to remove or block the use of information as required by law
        remain unaffected. Liability for such matters is possible only from the
        moment we become aware of a specific infringement. Upon notification of
        such violations, we will act promptly to remove the offending content.
      </Paragraph>
      <Title type='h4'>Liability for Links</Title>
      <Paragraph>
        Skilldor may contain links to external websites operated by third
        parties, over whose content we have no control. Therefore, we disclaim
        any responsibility or liability for such external content. The
        respective providers or operators of linked websites are solely
        responsible for their content. At the time of linking, we reviewed the
        pages for any potential legal violations and found none.
      </Paragraph>
      <Paragraph>
        Continuous monitoring of linked websites is not feasible without
        specific indications of legal infringement. If any violations come to
        our attention, we will remove the corresponding links immediately.
      </Paragraph>
      <Title type='h3'>Copyright</Title>
      <Paragraph>
        All content and works created by Skilldor on this platform are protected
        under Republic of Georgia copyright law. Any reproduction, editing,
        distribution, or exploitation outside the limits of copyright requires
        prior written consent from the respective author or creator. Downloads
        and copies of content are permitted only for private, non-commercial
        use.
      </Paragraph>
      <Paragraph>
        Where content on this platform is not created by Skilldor, the
        copyrights of third parties are respected, and such content is clearly
        identified. If you believe there is a copyright infringement, please
        notify us promptly. Upon confirmation of any violations, we will act
        swiftly to remove the infringing material.
      </Paragraph>
    </>
  )
}

export default Legal
