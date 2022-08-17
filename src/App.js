import { Route, Routes } from "react-router-dom";
import Navigation from "./routers/navigation/navigation.component";
import Home from "./routers/homepage/home.component";
import Authentication from "./routers/authentication/authentication.component";
import Shop from "./routers/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;