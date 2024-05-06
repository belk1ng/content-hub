import React, { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { withTranslation } from "react-i18next";
import type { WithTranslation } from "react-i18next";

interface Props extends WithTranslation {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { fallback, children, t } = this.props;

    if (hasError) {
      return fallback ?? <h1>{t("errors.global")}</h1>;
    }

    return children;
  }
}

export default withTranslation()(ErrorBoundary);
