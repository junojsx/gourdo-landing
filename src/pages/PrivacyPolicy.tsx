export default function PrivacyPolicy() {
  return (
    <div className="page legal">
      <div className="card legalCard">
        <h1>Privacy Policy</h1>
        <p className="legal__updated">
          Effective Date: January 1, 2025 · Last Updated: March 18, 2026
        </p>

        <section>
          <h2>Introduction</h2>
          <p>
            Gourdo (&quot;App&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
            mobile application (available on iOS and Android), website, and associated services (collectively, the
            &quot;Service&quot;).
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do
            not use our Service. By accessing and using Gourdo, you acknowledge that you have read, understood, and
            agree to be bound by all the terms of this Privacy Policy.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Information You Provide Directly</h3>
          <p>We collect the following information when you voluntarily provide it to us:</p>
          <ul>
            <li><strong>Account Information</strong>: Email address, display name, profile photo (optional), storage preferences, notification preferences.</li>
            <li><strong>Pantry Data</strong>: Product names, brands, barcodes, expiry dates, purchase dates, storage locations, quantity, notes, item photos (optional).</li>
            <li><strong>Scan Data</strong>: Barcode images/values (to look up product information), OCR-extracted text from packaging (to read expiry dates), Open Food Facts product lookup results.</li>
            <li><strong>Recipe Preferences</strong>: Expiring items you select for recipe suggestions, ingredient preferences (inferred from your pantry).</li>
            <li><strong>Device Information for Notifications</strong>: APNs (Apple Push Notification service) device token, Firebase Cloud Messaging token (Android). These are used only to send you expiry alerts and never shared with third parties.</li>
          </ul>
          <p>
            We do not sell your personal information. We do not use your data for advertising targeting.
          </p>
        </section>

        <section>
          <h2>Information Collected Automatically</h2>
          <p>
            We automatically collect certain information about your device and how you use the Service:
          </p>
          <ul>
            <li>
              <strong>Device Information</strong>: Device type (iOS/Android), OS version, app version, device identifiers (Advertising ID, IDFA), device model.
            </li>
            <li>
              <strong>Usage Analytics</strong>: Features used, scan count, recipe generation frequency, notification preferences, session duration, app crashes (via Sentry error tracking).
            </li>
            <li>
              <strong>Location Information</strong>: We do NOT collect location data. Camera access (required for barcode scanning) is only used for scanning and never transmits GPS coordinates.
            </li>
            <li>
              <strong>Performance &amp; Diagnostics</strong>: App performance metrics, error logs, API response times. All error data is sent to Sentry (encrypted in transit) and stored separately from personal information.
            </li>
          </ul>
        </section>

        <section>
          <h2>Information from Third Parties</h2>
          <p>
            We receive product information from external sources to improve your experience:
          </p>
          <ul>
            <li>
              <strong>Open Food Facts</strong>: When you scan a barcode, we look up the product name in Open Food Facts (free, open-source database). No personal data is sent to Open Food Facts—only the barcode itself.
            </li>
            <li>
              <strong>Payment Processors</strong>: RevenueCat (subscription billing) receives transaction data (subscription status, renewal dates). We never see your credit card number—all payment processing is handled by your platform&apos;s store (Apple App Store, Google Play).
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul>
            <li><strong>Core Functionality</strong>: To store your pantry items, track expiry dates, provide freshness recommendations, generate recipes, and send expiration alerts.</li>
            <li><strong>Barcode &amp; OCR Processing</strong>: To recognize barcodes, look up product information, and extract expiry dates from packaging photos.</li>
            <li><strong>AI Recipe Generation</strong>: To generate personalized recipes based on your expiring ingredients. Ingredient names are sent to Anthropic&apos;s Claude API; your full pantry history is never transmitted.</li>
            <li><strong>Subscription Management</strong>: To verify subscription status, enforce tier-based feature limits (Pro vs. Free), and manage billing cycles.</li>
            <li><strong>Notifications</strong>: To send push notifications about items expiring soon, weekly summaries, and recipe suggestions (Pro feature).</li>
            <li><strong>Service Improvement</strong>: To analyze usage patterns, diagnose app crashes (via Sentry), and improve features and performance.</li>
            <li><strong>Legal Compliance</strong>: To comply with applicable laws, respond to legal requests, and protect our legal rights.</li>
            <li><strong>Research &amp; Analytics</strong>: We may use anonymized, aggregated data (e.g., “users save an average of 8 items per day”) for research and product benchmarking.</li>
          </ul>
          <p>
            We do NOT use your information for marketing to third parties, selling data to advertisers, or any purpose other than those listed above.
          </p>
        </section>

        <section>
          <h2>Data Storage &amp; Retention</h2>
          <p>
            <strong>Where Your Data Is Stored</strong> — All personal data (accounts, pantry items, recipes) is stored in Supabase
            (open-source Firebase alternative) with PostgreSQL databases hosted in North America. Data is encrypted at rest using
            AES-256 encryption. Supabase complies with SOC 2 Type II and GDPR.
          </p>
          <p><strong>Data Retention</strong> — We retain your information as follows:</p>
          <ul>
            <li><strong>Account Data</strong>: Retained for the duration of your account. Deleted within 30 days of account deletion.</li>
            <li><strong>Pantry Items</strong>: Retained until you delete them or close your account.</li>
            <li><strong>Recipes</strong>: Cached for 30 days to avoid regenerating identical recipes. Deleted upon account deletion.</li>
            <li><strong>Scan History</strong>: Retained for 90 days to detect duplicate scans and analyze trends. Deleted after 90 days or upon account deletion.</li>
            <li><strong>Error Logs (Sentry)</strong>: Retained for 7 days. No personal data is logged.</li>
            <li><strong>Legal Holds</strong>: We may retain data longer if required by law or to respond to legal requests.</li>
          </ul>
        </section>

        <section>
          <h2>Security Measures</h2>
          <ul>
            <li><strong>Encryption in Transit</strong>: All communication between your device and our servers uses TLS 1.2+ (HTTPS).</li>
            <li><strong>Encryption at Rest</strong>: Database records are encrypted with AES-256. Sensitive API keys (Anthropic, RevenueCat) are managed via Supabase&apos;s secure environment variables and never exposed in client code.</li>
            <li><strong>Row-Level Security (RLS)</strong>: Database policies enforce that users can only access their own data. Subscription writes are service-role-only (no client access).</li>
            <li><strong>API Key Management</strong>: The Anthropic API key is stored exclusively in Supabase Edge Functions (server-side) and never reaches your device.</li>
            <li><strong>Authentication</strong>: Supabase Auth (JWT-based) manages login with optional multi-factor authentication. Password reset links expire after 24 hours.</li>
            <li><strong>Regular Backups</strong>: Supabase maintains automated backups; you can restore your data if needed via your account settings.</li>
            <li><strong>No Perfect Security</strong>: While we use industry-standard protections, no system is 100% secure. If you suspect unauthorized access, contact us immediately at privacy@gourdo.app.</li>
          </ul>
        </section>

        <section>
          <h2>Data Sharing &amp; Third Parties</h2>
          <p>
            We do NOT sell or rent your personal information. We only share data with third parties in these limited circumstances:
          </p>
          <h3>Service Providers</h3>
          <p>We share only the minimum necessary data with:</p>
          <ul>
            <li><strong>Supabase (Backend)</strong>: All account and pantry data. Supabase is a third-party database provider and is contractually bound by Data Processing Agreements (DPAs) to comply with GDPR and CCPA.</li>
            <li><strong>Anthropic (Claude API)</strong>: Only expiring ingredient names (e.g., “spinach, tomato, garlic”), not your full pantry. Claude processes these to generate recipes. See Anthropic&apos;s privacy policy at <a href="https://www.anthropic.com/privacy">anthropic.com/privacy</a>.</li>
            <li><strong>RevenueCat (Subscriptions)</strong>: Subscription status, transaction IDs, and renewal dates only. Your credit card data stays with Apple/Google.</li>
            <li><strong>Sentry (Error Tracking)</strong>: App crash logs and performance data (no personal user data). Errors are encrypted in transit.</li>
            <li><strong>Open Food Facts</strong>: Barcode numbers only (no personal data) when you scan products.</li>
          </ul>
          <h3>Legal Requests</h3>
          <p>
            We may disclose your information if required by law (e.g., subpoena, court order, law enforcement request). We will
            attempt to notify you of such requests unless legally prohibited.
          </p>
          <h3>Aggregated &amp; Anonymized Data</h3>
          <p>
            We may publish anonymized, aggregated insights (e.g., “average pantry size is 12 items”) for research and benchmarking.
            This data cannot identify you.
          </p>
          <h3>No Data Sales</h3>
          <p>
            We do NOT sell your data to marketers, advertisers, or brokers. We do NOT create detailed user profiles for targeting.
            Period.
          </p>
        </section>

        <section>
          <h2>Your Privacy Rights</h2>
          <h3>GDPR Rights (EU/EEA Users)</h3>
          <ul>
            <li>Right to Access: Request a copy of your personal data.</li>
            <li>Right to Rectification: Correct inaccurate data.</li>
            <li>Right to Erasure: Delete your account and all associated data (with some exceptions for legal compliance).</li>
            <li>Right to Restrict Processing: Limit how we use your data.</li>
            <li>Right to Data Portability: Receive your data in a portable format (JSON export).</li>
            <li>Right to Object: Opt out of certain processing.</li>
          </ul>
          <h3>CCPA Rights (California Users)</h3>
          <ul>
            <li>Right to Know: Request what personal information we have about you.</li>
            <li>Right to Delete: Request deletion of your information (with exceptions for legal obligations).</li>
            <li>Right to Opt-Out: Opt out of the “sale” or “sharing” of personal information. (We do not engage in such practices.)</li>
            <li>Right to Non-Discrimination: We will not discriminate against you for exercising your privacy rights.</li>
          </ul>
          <h3>How to Exercise Your Rights</h3>
          <p>
            To exercise any of these rights, contact us at <a href="mailto:privacy@gourdo.app">privacy@gourdo.app</a>. We will respond
            within 30 days (or as required by applicable law). We may ask for verification of your identity before processing your
            request.
          </p>
        </section>

        <section>
          <h2>Children’s Privacy</h2>
          <p>
            Gourdo is not intended for users under 13 years old (or the applicable age of digital consent in your jurisdiction). We do
            not knowingly collect personal information from children. If we become aware that a child has provided us with personal
            data, we will delete such information promptly. If you believe a child has provided us with information, please contact us
            immediately at <a href="mailto:privacy@gourdo.app">privacy@gourdo.app</a>.
          </p>
        </section>

        <section>
          <h2>Cookies &amp; Tracking</h2>
          <h3>Mobile App</h3>
          <p>Gourdo does NOT use cookies. The mobile app uses local device storage for:</p>
          <ul>
            <li><strong>Offline Sync</strong>: Temporarily caching data for offline access.</li>
            <li><strong>Session Management</strong>: Storing authentication tokens (securely, not in plaintext).</li>
          </ul>
          <h3>Website (gourdo.app)</h3>
          <p>
            If we maintain a website, we may use essential cookies for session management and security. We do NOT use third-party
            advertising cookies or tracking pixels.
          </p>
        </section>

        <section>
          <h2>International Data Transfers</h2>
          <p>
            Gourdo&apos;s servers are hosted in North America. If you are located outside North America, your information will be
            transferred to and processed in North America. By using Gourdo, you consent to such transfers. We comply with applicable
            data protection laws regarding international transfers (e.g., GDPR adequacy decisions for EU-to-US transfers).
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy at any time. When we do, we will revise the “Last Updated” date at the top of this
            document. Material changes (e.g., how we use data, new sharing practices) will be communicated via in-app notification or
            email at least 30 days before the change takes effect. Your continued use of Gourdo after changes become effective
            constitutes your acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
          <ul>
            <li><strong>Email</strong>: <a href="mailto:privacy@gourdo.app">privacy@gourdo.app</a></li>
            <li><strong>Support Portal</strong>: support.gourdo.app</li>
            <li><strong>Mailing Address</strong>: Gourdo Inc., [Address to be added], USA</li>
          </ul>
          <p>
            For GDPR-related data subject requests, you may also contact our Data Protection Officer (if appointed) or file a complaint
            with your local supervisory authority.
          </p>
        </section>
      </div>
    </div>
  );
}
