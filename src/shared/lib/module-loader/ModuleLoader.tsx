import type { FC } from "react";
import { useEffect } from "react";
import { useStore } from "react-redux";

import type { ModuleLoaderProps } from "./ModuleLoader.props";

import { useAppDispatch } from "@/shared/model";

const ModuleLoader: FC<ModuleLoaderProps> = ({
  reducerName,
  reducer,
  children,
}) => {
  // FIXME: Extend EnhancedStore interface with reducerManagerField
  const store = useStore() as StoreWithReducerManager;

  const dispatch = useAppDispatch();

  useEffect(() => {
    const upperReducerName = reducerName.toUpperCase();

    store.reducerManager.add(reducerName, reducer);
    dispatch({ type: `@LOAD_REDUCER_${upperReducerName}` });

    return () => {
      store.reducerManager.remove(reducerName);
      dispatch({ type: `@REMOVE_REDUCER_${upperReducerName}` });
    };
  }, [store, dispatch, reducer, reducerName]);

  return children;
};

export default ModuleLoader;
