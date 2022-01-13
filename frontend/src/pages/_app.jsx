import { ApolloProvider } from "@apollo/client";
import client from "../apollo"
import Layout from "components/Layout/layout"
import "../styles/index.scss"
function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}><Layout><Component {...pageProps} /></Layout></ApolloProvider>
}

export default MyApp
