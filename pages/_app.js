import Layout from '../components/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Store from "../store/store";
import { Provider } from "react-redux";


export default function App({ Component, pageProps }) {
  return(
    <Provider store={Store}>
      <Layout>
    <Component {...pageProps} />
  </Layout>
  </Provider>
  ) 

}
