import { FeedbackButton } from '../components/FeedbackButton';
import { USERJOT_ENV_INVALID, USERJOT_PROJECT_ID } from '../hooks/useUserJot';

const hasProjectId = USERJOT_PROJECT_ID !== null;

export default function Feedback() {
  return (
    <div className="page legal">
      <div className="card legalCard feedbackPage">
        <h1>Feedback</h1>
        <p className="legal__updated">Tell us what you think — bugs, ideas, and improvements.</p>

        <section>
          <h2>How it works</h2>
          <p>
            Gourdo uses <strong>UserJot</strong> to collect feedback. Use the floating button on any page, or open the
            feedback panel from this page with the button below.
          </p>
          {USERJOT_ENV_INVALID && (
            <p className="feedbackPage__warning">
              <strong>Wrong value in env:</strong> <code className="mono">VITE_USERJOT_PROJECT_ID</code> must be your{' '}
              <strong>Project ID</strong> from UserJot (Settings → Project), e.g. <code className="mono">proj_…</code> — not
              your board URL like <code className="mono">https://gourdo.userjot.com/…</code>. Update{' '}
              <code className="mono">.env</code> or <code className="mono">.env.local</code> and restart the dev server.
            </p>
          )}
          {!hasProjectId && !USERJOT_ENV_INVALID && (
            <p className="feedbackPage__warning">
              <strong>Setup required:</strong> add <code className="mono">VITE_USERJOT_PROJECT_ID</code> to your{' '}
              <code className="mono">.env</code> file (see <code className="mono">.env.example</code>), then restart the dev
              server.
            </p>
          )}
        </section>

        <section>
          <h2>Open feedback</h2>
          <p>Opens the UserJot feedback form (same as the site widget).</p>
          <FeedbackButton className="feedbackPage__cta">Open feedback form</FeedbackButton>
        </section>
      </div>
    </div>
  );
}
