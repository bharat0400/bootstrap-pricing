import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
    return (
    <div className="container py-3" style={{maxWidth:960}}>
        <Header />
        <Main />
        <Footer />
    </div>
    );
  }

export default App;
