"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Suspense } from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const Providers = (props: any) => {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<p>Loading...</p>}>
        <Provider store={store}>{props.children}</Provider>
      </Suspense>
    </ApolloProvider>
  );
};

export default Providers;
