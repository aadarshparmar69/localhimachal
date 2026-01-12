import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: unknown;
  errorInfo?: React.ErrorInfo;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    // Ensure we always log in prod so we can debug blank screens.
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    const message =
      this.state.error instanceof Error
        ? this.state.error.message
        : "Something went wrong while loading the app.";

    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            We hit a loading error
          </h1>
          <p className="mt-3 text-muted-foreground">
            {message} Please reload. If it keeps happening, share this screen
            with us.
          </p>
          <button
            onClick={this.handleReload}
            className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
          >
            Reload
          </button>

          {this.state.errorInfo?.componentStack ? (
            <pre className="mt-8 overflow-auto rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
              {this.state.errorInfo.componentStack}
            </pre>
          ) : null}
        </div>
      </div>
    );
  }
}
