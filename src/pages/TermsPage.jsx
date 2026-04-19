import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms of Use — RopoBlogs'
    return () => { document.title = 'RopoBlogs — Tech. Lifestyle. Sports.' }
  }, [])

  return (
    <div className="fade-up">
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '60px 0' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, letterSpacing: '-.03em' }}>
            Terms of Use
          </h1>
          <p style={{ color: 'rgba(250,248,244,.5)', fontFamily: 'var(--mono)', fontSize: 12, marginTop: 12 }}>
            Last updated: April 2025
          </p>
        </div>
      </div>

      <div className="simple-page">
        <div className="container" style={{ maxWidth: 740 }}>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using RopoBlogs (ropoblogs.com), you accept and agree to be bound
            by these Terms of Use. If you do not agree to these terms, please do not use this site.
          </p>

          <h2>Content and Accuracy</h2>
          <p>
            All content on RopoBlogs is provided for informational and educational purposes only.
            While we strive for accuracy and keep articles up to date, we make no warranties
            regarding the completeness, reliability, or suitability of any content for a particular
            purpose. Always verify important information independently.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All original content on RopoBlogs — including articles, design, brand elements, and
            logo — is owned by RopoBlogs. You are welcome to share our content with proper
            attribution and a link back to the original article, but you may not reproduce articles
            in full without prior written permission.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            Some posts contain affiliate links, which are clearly disclosed at the top of the article.
            Clicking these links may earn RopoBlogs a small commission at no additional cost to you.
            Our editorial opinions are never influenced by affiliate arrangements.
          </p>

          <h2>User Conduct</h2>
          <p>
            You agree not to use RopoBlogs in any way that could damage, disable, or impair the site,
            or interfere with any other party's use. You agree not to attempt to gain unauthorized
            access to any part of the site or its related systems.
          </p>

          <h2>External Links</h2>
          <p>
            RopoBlogs may contain links to third-party websites. These links are provided for
            convenience only. We have no control over the content of those sites and accept no
            responsibility for them or for any loss or damage that may arise from your use of them.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, RopoBlogs shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of the site or
            reliance on any content published here.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be posted on this
            page with an updated date. Continued use of the site after changes constitutes acceptance
            of the new terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? <Link to="/contact">Contact us here</Link> or email{' '}
            <a href="mailto:hello@ropoblogs.com">hello@ropoblogs.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
