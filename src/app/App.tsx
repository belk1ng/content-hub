import Providers from "@/app/providers";
import Router from "@/app/router";
import "@/shared/config/i18n/i18n.production";
import "./styles/index.scss";

const App = () => {
  return (
    <Providers>
      <Router />
    </Providers>
  );
};

export default App;
