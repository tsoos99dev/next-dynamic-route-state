import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';

export interface Bear {
  id: number;
  name: string;
}

export interface Cub {
  id: number;
  name: string;
}

export interface AppProperties {
  bearId: number | null;
  bears: Bear[];

  cubId: number | null;
  cubs: Cub[];
}

export interface AppActions {
  setBear: (bear: Bear) => void;
  setCub: (cub: Cub) => void;
}

export type AppState = AppProperties & AppActions;

export const createAppStore = (initProps?: Partial<AppProperties>) => {
  const DEFAULT_PROPS = {
    bearId: null,
    bears: [],

    cubId: null,
    cubs: [],
  };
  return createStore<AppState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setBear: (bear) =>
      set((state) => ({
        bears: state.bears.map((d) => (d.id === bear.id ? bear : d)),
      })),
    setCub: (cub) =>
      set((state) => ({
        cubs: state.cubs.map((d) => (d.id === cub.id ? cub : d)),
      })),
  }));
};

export type AppStore = ReturnType<typeof createAppStore>;

export interface AppStoreWithFragment {
  store: AppStore;
  fragment?: Partial<AppProperties>;
}

export const AppContext = createContext<AppStoreWithFragment | null>(null);

export function useAppStore<T>(selector: (state: AppState) => T): T {
  const storeWithFragment = useContext(AppContext);
  if (storeWithFragment === null)
    throw new Error('Missing AppStoreFragmentProvider in the tree');

  const { store, fragment } = storeWithFragment;

  const extendedSelector = (state: AppState) => {
    const extendedState = {
      ...state,
      ...fragment,
    };

    // console.log(
    //   'Fragment: ',
    //   fragment,
    //   'State: ',
    //   state,
    //   'Extended state: ',
    //   extendedState
    // );

    return selector(extendedState);
  };

  return useStore(store, extendedSelector);
}

export function useBearOptional() {
  return useAppStore((state) => {
    const bearId = state.bearId;
    const bear = state.bears.find((d) => d.id === bearId);
    return bear;
  });
}

export function useBear() {
  const bear = useBearOptional();
  if (typeof bear === 'undefined')
    throw new Error("Bear hasn't been provided.");
  return bear;
}

export function useCubOptional() {
  return useAppStore((state) => {
    const cubId = state.cubId;
    const cub = state.cubs.find((d) => d.id === cubId);
    return cub;
  });
}

export function useCub() {
  const cub = useCubOptional();
  if (typeof cub === 'undefined') throw new Error("Cub hasn't been provided.");
  return cub;
}
