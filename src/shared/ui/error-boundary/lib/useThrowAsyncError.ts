import { useState } from "react";

/*
 * A hook for registering asynchronous errors. Before using it, make sure that
 * Error Boundary is present higher up the hierarchy.
 *
 * Use case:
 * const Component = () => {
 *   const throwAsyncError = useThrowAsyncError();
 *
 *   useEffect(() => {
 *     fetch('/endpoint')
 *       .then(...)
 *       .catch((e) => {
 *         throwAsyncError(e);
 *       });
 *   });
 *   ...
 * };
 */
export const useThrowAsyncError = () => {
  const [_, setError] = useState(null);

  return (error: Error) => {
    setError(() => {
      throw error;
    });
  };
};
