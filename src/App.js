import { Route, Routes } from "react-router-dom";
import Navigation from "./routers/navigation/navigation.component";
import Home from "./routers/homepage/home.component";

const Shop = () => {
  return <h1>I am the shop page.</h1>
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;