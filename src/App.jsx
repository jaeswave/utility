import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((data, i) => (
          <Route key={i} path={data.path} element={<data.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
