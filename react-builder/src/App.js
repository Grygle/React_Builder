import Layout from './containers/Layout/Layout';
import Builder from './containers/Builder/Builder';
import Checkout from './containers/Checkout/Checkout';
function App() {
  return (
    <div>
      <Layout>
        <Builder />
        <Checkout />
      </Layout> 
    </div>
  );
}

export default App;
