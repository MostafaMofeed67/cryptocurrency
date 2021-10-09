import { Redirect, Route, Switch } from "react-router";
import Cryptocurrencies from "./components/cryptocurrencies/Cryptocurrencies";
import CryptocurrencyDetails from "./components/cryptocurrencies/CryptocurrencyDetails";
import Layout from "./components/layout/Layout";
import News from "./components/news/News";
import BackToTop from "./helpers/BackToTop";
import ScrollToTop from "./helpers/ScrollToTop";
import ExchangesPage from "./pages/ExchangesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <BackToTop />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/cryptocurrencies">
          <Cryptocurrencies />
        </Route>
        <Route path="/crypto/:id">
          <CryptocurrencyDetails />
        </Route>
        <Route path="/exchanges">
          <ExchangesPage />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
