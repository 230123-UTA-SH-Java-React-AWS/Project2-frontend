import { RootState, store } from "./redux/store";

import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { Root } from "./Root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Root />
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
