import Layout from '../comp/layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp
