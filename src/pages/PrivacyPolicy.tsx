export default function PrivacyPolicy() {
  return (
    <div className="page legal">
      <div className="card legalCard">
        <h1>Privacy Policy</h1>
        <p className="legal__updated">Last updated: March 2026</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Touch Grass (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is a task-based app shielding application for iOS.
            This Privacy Policy explains how we collect, use, and protect your information when you use our app.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>
            Touch Grass is designed with privacy in mind. We may collect:
          </p>
          <ul>
            <li>Data you enter in the app (for example: task names and completion status). This is stored locally on your device unless a future sync feature is explicitly enabled.</li>
            <li>Basic diagnostic information (for example: crash logs) and anonymous usage analytics to improve the app, if you have opted in.</li>
          </ul>
          <p>
            We do not sell your personal information. We do not use your data for advertising targeting.
          </p>
        </section>

        <section>
          <h2>Screen Time API, Family Controls, and permissions</h2>
          <p>
            Touch Grass may use Apple&apos;s Screen Time APIs (including Family Controls, Managed Settings, and Device Activity) to shield selected apps until tasks are completed.
            These APIs are designed to preserve privacy.
          </p>
          <ul>
            <li>
              <strong>Authorization</strong> — When you enable shielding, iOS will ask you to authorize Touch Grass. For child devices, authorization requires approval by a parent/guardian in the same Family Sharing group. For an individual device, authorization requires approval by the device owner.
            </li>
            <li>
              <strong>What we can access</strong> — You can choose apps, categories, and web domains to shield using Apple&apos;s system picker. We store your selections locally so the app can apply your chosen shielding rules.
            </li>
            <li>
              <strong>What we don&apos;t collect</strong> — Touch Grass does not collect your message content, photos, contacts, precise location, keystrokes, or passwords. We do not sell data, and we do not use Screen Time information for advertising.
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Storage</h2>
          <p>
            Your tasks and app settings are stored on your device. We do not upload or sync this data to our servers unless you explicitly use a sync or backup feature (if offered).
          </p>
        </section>

        <section>
          <h2>Third Parties</h2>
          <p>
            Our app may use third-party services (for example: analytics or crash reporting) if you opt in. Those services have their own privacy policies. We encourage you to review them.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            Touch Grass is not directed at children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2>Your choices and controls</h2>
          <ul>
            <li>You can change which apps are shielded at any time in the app.</li>
            <li>You can revoke Screen Time authorization in iOS settings.</li>
            <li>You can delete the app to remove locally stored data. See our <a href="/data-deletion">Data Deletion Instructions</a>.</li>
          </ul>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes via the app or this page.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy-related questions, please see our <a href="/data-deletion">Data Deletion Instructions</a> or contact us at the address provided in the app or on this site.
          </p>
        </section>
      </div>
    </div>
  );
}
