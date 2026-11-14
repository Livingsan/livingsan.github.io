import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in portfolio app:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b0a0a] text-[#e0d5c1] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-2xl bg-[#121110] border border-[rgba(224,213,193,0.15)] shadow-xl space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[rgba(200,29,37,0.15)] border border-[rgba(200,29,37,0.35)] flex items-center justify-center text-[#c81d25] font-bold text-xl">
              !
            </div>
            <h1 className="text-xl font-bold font-sans">Something went wrong</h1>
            <p className="text-xs text-[rgba(224,213,193,0.7)] leading-relaxed">
              We encountered a display issue while rendering the application. Tap below to reload.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-4 rounded-xl bg-[#c81d25] text-white font-semibold text-xs tracking-wider uppercase transition hover:bg-[#b0171e]"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
