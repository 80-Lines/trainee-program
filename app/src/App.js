import React from "react";
import Button from "./components/button";
import Input from "./components/input";
import Separator from "./components/separator";
import Modal from "./components/modal";

function App() {
  const [name, setName] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  return (
    <Container>
      <Button onClick={() => {}}>Button</Button>
      <Separator />
      <Input
        id="name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Enter your name here"
        type="text"
      />
      <Separator />
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        Ex dolor qui pariatur laborum irure eiusmod culpa velit aliquip ea do
        incididunt proident exercitation. Nulla non esse veniam ullamco nisi
        sunt. Est officia non fugiat enim tempor Lorem occaecat amet.
        <Separator />
        Non aliqua magna consequat qui eiusmod sit aliquip anim amet amet id
        nostrud. Quis do est anim enim laborum et duis cupidatat ut laborum do
        anim excepteur. Voluptate et sit ex do aliqua irure adipisicing dolor
        culpa ea do est. Laboris dolore magna minim incididunt aute.
      </Modal>
    </Container>
  );
}

export default App;

const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
