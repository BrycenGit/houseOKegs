import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import "./../App.css"


function App() {
  return (
    <>
      <Header />
      <div className="background">
        <Container>
          <KegControl />
        </Container>
      </div> 
    </>
  );
}

export default App;
