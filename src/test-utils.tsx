import React from "react";
import { render } from "@testing-library/react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import citaReducer from "./features/quote/citaSlice";
import { RootState } from "./app/store";

interface RenderOptions {
  preloadedState?: RootState;
  store?: EnhancedStore<RootState>;
}

const customRender = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        cita: citaReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: RenderOptions = {}
) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { customRender as render };

