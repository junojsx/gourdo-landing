import type { ReactNode } from 'react';

type FeedbackButtonProps = {
  className?: string;
  children?: ReactNode;
};

export function FeedbackButton({ className, children }: FeedbackButtonProps) {
  const handleClick = () => {
    if (typeof window.uj?.showWidget === 'function') {
      window.uj.showWidget({ section: 'feedback' });
    }
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children ?? 'Share feedback'}
    </button>
  );
}
