import { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy — RopoBlogs'
    return () => { document.title = 'RopoBlogs — Tech. Lifestyle. Sports.' }
  }, [])

  return (
    <div className="fade-up">
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '60px 0' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, letterSpacing: '-.03em' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(250,248,244,.5)', fontFamily: 'var(--mono)', fontSize: 12, marginTop: 12 }}>
            Last updated: April 2025
          </p>
        </div>
      </div>

      <div className="simple-page">
        <div className="container" style={{ maxWidth: 740 }}>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your email address when subscribing
            to our newsletter. We also collect usage data through analytics tools (such as Google
            Analytics 4) to understand how readers engage with our content.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            Your email address is used only to send our newsletter and important site updates.
            We do not sell, rent, or share your personal data with third parties for marketing purposes.
          </p>
          <p>
            Analytics data is used in aggregate to improve the quality and relevance of our content.
            It is never used to identify individual users.
          </p>

          <h2>Cookies</h2>
          <p>
            We use essential cookies for site functionality and analytics cookies to improve the reading
            experience. You can disable cookies in your browser settings at any time, though this may
            affect some site features.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use Google Analytics 4 for traffic analytics and may use third-party newsletter providers
            to manage subscriptions. These services have their own privacy policies which we encourage
            you to review.
          </p>

          <h2>Affiliate Links</h2>
          <p>
            Some articles may contain affiliate links. We clearly disclose this at the top of any such
            article. Clicking these links may result in a small commission to RopoBlogs at no extra cost
            to you. We only recommend products we genuinely believe in.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your email address for as long as you are subscribed to our newsletter. You may
            unsubscribe at any time using the link in any newsletter email, and your data will be deleted
            within 30 days.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, or delete your
            personal data. To exercise these rights, contact us at <a href="mailto:hello@ropoblogs.com">hello@ropoblogs.com</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify subscribers of significant
            changes via email and update the "last updated" date at the top of this page.
          </p>

          <h2>Contact</h2>
          <p>
            For any privacy-related questions or concerns, please email us at{' '}
            <a href="mailto:hello@ropoblogs.com">hello@ropoblogs.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
