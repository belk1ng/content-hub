import type { FC } from "react";
import { useEffect } from "react";
import { useStore } from "react-redux";

import type { ModuleLoaderProps } from "./ModuleLoader.props";

import { useAppDispatch } from "@/shared/model";

const ModuleLoader: FC<ModuleLoaderProps> = ({
  reducers,
  clearOnUnmount = false,
  children,
}) => {
  // FIXME: Extend EnhancedStore interface with reducerManagerField
  const store = useStore() as StoreWithReducerManager;

  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      store.reducerManager.add(reducerName as RootStateKey, reducer);
      dispatch({ type: `@LOAD_REDUCER_${reducerName.toUpperCase()}` });
    });

    return () => {
      if (clearOnUnmount) {
        Object.keys(reducers).forEach((reducerName) => {
          store.reducerManager.remove(reducerName as RootStateKey);
          dispatch({ type: `@REMOVE_REDUCER_${reducerName.toUpperCase()}` });
        });
      }
    };
  }, [store, dispatch, reducers, clearOnUnmount]);

  return children;
};

export default ModuleLoader;
