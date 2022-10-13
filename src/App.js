import './App.css';
import Header from "./Header/script";
import Footer from "./Footer";
import Text from "./Instructions/text";

function App() {
  return (
    <div className="App">

        <div className="main-container">
            <div className="container">
                <Header />
            </div>
        </div>

        <Footer />
        <Text />
    </div>
  );
}

export default App;
