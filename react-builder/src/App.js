import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Builder from './containers/Builder/Builder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" component={Builder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
