import { configureStore } from "@reduxjs/toolkit";

import { ecoCienciaApi } from "./ecoCiencia.api.ts";

export const store = configureStore({
  reducer: {
    [ecoCienciaApi.reducerPath]: ecoCienciaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecoCienciaApi.middleware),
});
