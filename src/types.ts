export interface TerminalOption {
  id: number;
  label: string;
  enTitle: string;
  description: string;
  recommended?: boolean;
  actionHint: string;
}

export interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  badge: string;
  summary: string;
}

export interface ScreenshotState {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  placeholderHint: string;
}
