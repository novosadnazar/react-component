import "./App.css";
import { Button } from "./Button/Button";
import { Title } from "./Title/Title";
import phone from "./phone.json";
import { ModalPhone } from "./modal-phone/phone";
import { Section } from "./section/section";

function App({ info }) {
  return (
    <>
      <h1>React Component</h1>
      <p>text</p>
      <Button text="hello" messange="Hello world" />
      <p>{info}</p>
      <Title messange="це заголовок" />

      <Section title="заголовок секції">
        <ModalPhone data={phone} />
      </Section>

      <Section title="заголовок іншої секції">
        <Button text="hello" messange="Hello world" />
      </Section>
    </>
  );
}

export default App;
