import "./styles.css";
import Header from "./components/Header"
import Nav from "./components/Nav"
import Article from "./components/Article"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="App">
     <Header />
     <Nav />
     <Article />
     <Footer />
    </div>
  )
}