import React from "react";
import Card from "react-bootstrap/Card";
import { MessageForm } from "./components/MessageForm";
import { USER } from "./config";

const App = () => (
  <div className="App">
    <Card className="Home">
      <Card.Header className="Home_Title">Home</Card.Header>
      <Card.Body className="Home_Body">
        <MessageForm user={USER} />
      </Card.Body>
    </Card>
  </div>
);

export default App;
