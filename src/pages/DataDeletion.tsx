export default function DataDeletion() {
  return (
    <div className="page legal">
      <div className="card legalCard">
        <h1>Data Deletion Policy</h1>
        <p className="legal__updated">Effective Date: January 1, 2025</p>

        <section>
          <h2>Introduction</h2>
          <p>
            This Data Deletion Policy (&quot;Policy&quot;) explains how Gourdo handles the permanent deletion of user data. We are committed
            to honoring your right to erasure under GDPR, CCPA, and similar privacy laws. This Policy outlines the processes, timelines,
            and exceptions related to data deletion.
          </p>
        </section>

        <section>
          <h2>Scope of Deletion</h2>
          <h3>Data Subject to Deletion</h3>
          <p>When you delete your Gourdo account, the following personal data is permanently deleted:</p>
          <ul>
            <li><strong>Account Profile</strong>: Email address, display name, avatar, password hash, and account metadata</li>
            <li><strong>Pantry Items</strong>: All food items, quantities, storage locations, purchase dates, expiry dates, images, and notes</li>
            <li><strong>Recipes</strong>: All AI-generated recipes, ingredients lists, cooking steps, and recipe history</li>
            <li><strong>Scan History</strong>: Records of barcode scans, OCR attempts, and product lookups</li>
            <li><strong>Notification Preferences</strong>: Alert settings, APNs device tokens, and notification history</li>
            <li><strong>Subscription Information</strong>: Subscription status, trial period data, and billing history linked to your account</li>
            <li><strong>Product Images</strong>: All photos uploaded to Supabase Storage associated with your account</li>
          </ul>

          <h3>Data NOT Deleted</h3>
          <p>The following data may be retained after account deletion:</p>
          <ul>
            <li><strong>Aggregated Analytics</strong>: Anonymized, non-identifiable data may be retained indefinitely for product improvement</li>
            <li><strong>Log Files &amp; Backups</strong>: Residual data may exist for up to 90 days for security and disaster recovery purposes</li>
            <li><strong>Legal Compliance</strong>: Data may be retained if required by law (e.g., tax records, legal disputes)</li>
            <li><strong>Third-Party Processors</strong>: Apple, Google, and RevenueCat may retain data per their own retention policies</li>
            <li><strong>Anonymized Data</strong>: Once data is de-identified, it is not subject to deletion requests</li>
          </ul>
        </section>

        <section>
          <h2>Methods of Data Deletion</h2>
          <h3>Self-Service Account Deletion (In-App)</h3>
          <p>Users can delete their account directly through the Gourdo app:</p>
          <ul>
            <li>Open the app and navigate to Account Settings</li>
            <li>Select &quot;Delete Account&quot;</li>
            <li>Confirm your email and current password</li>
            <li>Review the deletion confirmation (including the 30-day grace period)</li>
            <li>Click &quot;Permanently Delete My Account&quot; to confirm</li>
          </ul>
          <p>Self-service deletion is immediate and irreversible. You will receive a confirmation email acknowledging the deletion request.</p>

          <h3>Data Subject Access Request (DSAR)</h3>
          <p>
            Users can request deletion by submitting a formal data subject access request (DSAR) via email:
          </p>
          <ul>
            <li>Send an email to <a href="mailto:privacy@gourdo.app">privacy@gourdo.app</a> with the subject line &quot;Data Deletion Request&quot;</li>
            <li>Include your full name, registered email address, and a clear statement of your deletion request</li>
            <li>Verify your identity by confirming access to your registered email address</li>
          </ul>
          <p>
            We will process your request within 30 days (or as required by applicable law). You will receive a confirmation email once your
            data has been permanently deleted from our primary systems.
          </p>

          <h3>Automated Deletion (Inactive Accounts)</h3>
          <p>
            Gourdo does NOT automatically delete accounts due to inactivity. Your account and data will remain in our system indefinitely
            unless you explicitly request deletion.
          </p>
        </section>

        <section>
          <h2>Deletion Timeline &amp; Grace Period</h2>
          <h3>Immediate Deactivation</h3>
          <p>
            Upon deletion request, your account is immediately deactivated. You will no longer be able to log in, access your pantry data,
            generate recipes, or use any Gourdo features.
          </p>
          <h3>30-Day Grace Period</h3>
          <p>Your data is retained in a secure, isolated state for 30 days following deletion. This grace period allows you to:</p>
          <ul>
            <li>Contact support if you accidentally deleted your account and wish to recover it</li>
            <li>Ensure no pending transactions or billing issues need resolution</li>
            <li>Provide time for regulatory compliance checks</li>
          </ul>
          <p>
            If you request recovery within the 30-day window, we will reactivate your account at no additional cost. After 30 days, all data is
            permanently erased and cannot be recovered.
          </p>
          <h3>Permanent Deletion</h3>
          <p>
            After the 30-day grace period expires, your account and all associated data are permanently deleted from Gourdo&apos;s primary
            database and backups. Deletion is final and irreversible.
          </p>
        </section>

        <section>
          <h2>Verification of Deletion</h2>
          <h3>Deletion Confirmation</h3>
          <p>Upon successful deletion, you will receive a confirmation email that includes:</p>
          <ul>
            <li>The date and time of the deletion request</li>
            <li>Confirmation that your account has been deactivated</li>
            <li>The 30-day grace period end date</li>
            <li>Instructions for account recovery (if applicable)</li>
          </ul>
          <h3>Verification of Permanent Deletion</h3>
          <p>
            After the 30-day grace period expires, you will receive a final confirmation email stating that all data has been permanently
            deleted. You can also verify deletion by attempting to log in—your account will no longer exist.
          </p>
          <h3>Data Export Before Deletion</h3>
          <p>
            We recommend exporting your data before requesting deletion. You can request a data export by emailing{' '}
            <a href="mailto:privacy@gourdo.app">privacy@gourdo.app</a> with &quot;Data Export Request&quot; in the subject line. We will provide
            your data in a portable format (JSON) within 30 days.
          </p>
        </section>

        <section>
          <h2>Contact &amp; Support</h2>
          <p>For questions about this Data Deletion Policy or to request deletion, please contact:</p>
          <ul>
            <li>Email: <a href="mailto:privacy@gourdo.app">privacy@gourdo.app</a></li>
            <li>Support: <a href="mailto:support@gourdo.app">support@gourdo.app</a></li>
            <li>Mailing Address: [Your Legal Address]</li>
          </ul>
          <p>Response Time: We respond to deletion requests within 30 days (or as required by law).</p>
        </section>
      </div>
    </div>
  );
}