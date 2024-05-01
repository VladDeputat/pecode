"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Suspense } from "react";

const Providers = (props: any) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Provider store={store}>{props.children}</Provider>
    </Suspense>
  );
};

export default Providers;
