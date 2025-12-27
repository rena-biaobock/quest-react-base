import "./App.css";
import { Button } from "./components/Button";
import { ColoredParagraph } from "./components/ColoredParagraph";

function App() {
  return (
    <>
      <ColoredParagraph
        paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue ex eu iaculis sollicitudin. Nunc consequat non risus id faucibus. Mauris ullamcorper, libero facilisis tincidunt ullamcorper, sapien lacus congue massa, id suscipit ipsum ante ac nunc."
        textColor="#FF1189"
      />

      <Button label="Baixar CV" />
    </>
  );
}

export default App;
