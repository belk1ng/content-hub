import { render, renderHook, screen } from "@testing-library/react";
import { useEffect } from "react";

import ErrorBoundary from "./ErrorBoundary";
import { useThrowAsyncError } from "../lib/useThrowAsyncError";

import TestProviders from "@/shared/lib/test/test-providers";

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
      <ErrorBoundary>
        <p>Everything is fine</p>
      </ErrorBoundary>,
      {
        wrapper: TestProviders,
      }
    );

    expect(screen.getByText("Everything is fine")).toBeInTheDocument();
  });

  test("Should render fallback component in error case", () => {
    const ChildWithError = () => {
      throw new Error();
    };

    render(
      <ErrorBoundary fallback={<h1>Fallback</h1>}>
        <ChildWithError />
      </ErrorBoundary>,
      {
        wrapper: TestProviders,
      }
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
      <ErrorBoundary fallback={<p>Fallback :(</p>}>
        <ChildWithAsyncError />
      </ErrorBoundary>,
      {
        wrapper: TestProviders,
      }
    );

    expect(screen.getByText("Fallback :(")).toBeInTheDocument();
  });
});
