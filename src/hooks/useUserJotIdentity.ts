import { useEffect } from 'react';

export interface UserJotUserIdentity {
  id: string;
  email: string;
  displayName?: string;
}

export function useUserJotIdentity(user: UserJotUserIdentity | null) {
  useEffect(() => {
    if (typeof window.uj?.identify !== 'function') return;

    if (!user) {
      window.uj.identify(null);
      return;
    }

    const [firstName, ...rest] = (user.displayName ?? '').split(' ');
    window.uj.identify({
      id: user.id,
      email: user.email,
      firstName: firstName || undefined,
      lastName: rest.join(' ') || undefined,
    });
  }, [user]);
}
