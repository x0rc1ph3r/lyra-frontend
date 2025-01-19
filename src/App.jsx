import React from "react";
import SolanaWallet from "./solana/wallet"
import { Routes, Route } from "react-router-dom"
import Admin from "./components/Admin"
import Main from "./components/Main";

function App() {

  return (
    <SolanaWallet>
    
      <Routes>
        <Route exact path="/hcksbcowk" element={ <Admin/> } />
        <Route path="/" element={ <Main/> } />
      </Routes>
    
    </SolanaWallet>
  );
}

export default App;
