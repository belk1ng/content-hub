import { render, renderHook, screen } from "@testing-library/react";
import { useEffect } from "react";

import ErrorBoundary from "./ErrorBoundary";
import { useThrowAsyncError } from "../lib/useThrowAsyncError";

import withTranslation from "@/shared/lib/test/withTranslation";

const CONSOLE_ERROR = console.error;

describe("ErrorBoundary", () => {
  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = CONSOLE_ERROR;
  });

  test("Should render children when everything is fine", () => {
    render(
      withTranslation(
        <ErrorBoundary>
          <p>Everything is fine</p>
        </ErrorBoundary>
      )
    );

    expect(screen.getByText("Everything is fine")).toBeInTheDocument();
  });

  test("Should render fallback component in error case", () => {
    const ChildWithError = () => {
      throw new Error();
    };

    render(
      withTranslation(
        <ErrorBoundary fallback={<h1>Fallback</h1>}>
          <ChildWithError />
        </ErrorBoundary>
      )
    );

    expect(screen.getByText("Fallback")).toBeInTheDocument();
  });

  test("Should render fallback component after useThrowAsyncThrow", () => {
    const ChildWithAsyncError = () => {
      const { result } = renderHook(() => useThrowAsyncError());

      useEffect(
        function () {
          try {
            throw new Error();
          } catch (error) {
            result.current(error);
          }
        },
        [result]
      );

      return <section />;
    };

    render(
      withTranslation(
        <ErrorBoundary fallback={<p>Fallback :(</p>}>
          <ChildWithAsyncError />
        </ErrorBoundary>
      )
    );

    expect(screen.getByText("Fallback :(")).toBeInTheDocument();
  });
});
