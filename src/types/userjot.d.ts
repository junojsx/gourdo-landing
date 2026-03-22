// UserJot SDK — ambient types (no official @types package)

interface UserJotIdentity {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

interface UserJot {
  init(
    projectId: string,
    options?: {
      widget?: boolean;
      position?: 'left' | 'right';
      theme?: 'light' | 'dark' | 'auto';
    }
  ): void;
  identify(identity: UserJotIdentity | null): void;
  showWidget(options?: { section?: 'feedback' | 'roadmap' | 'changelog' }): void;
  destroy(): void;
}

interface Window {
  uj: UserJot;
  $ujq: unknown[];
}
