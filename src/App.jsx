import axios from "axios";
import { Header } from "./Header";
import { BoatsPage } from "./BoatsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <BoatsPage />
      <Footer />
    </div>
  )
}

export default App;