import { useEffect, useState } from "react";
import Field from "./components/Field/Field";

function App() {
  const [celcius, setCelcius] = useState<string | number>("");
  const [fahrenheit, setFahrenheit] = useState<string | number>("");
  const [kelvin, setKelvin] = useState<string | number>("");

  useEffect(() => {}, [celcius]);

  useEffect(() => {}, [fahrenheit]);

  useEffect(() => {}, [kelvin]);

  return (
    <main className='styles.container'>
      <h1>Conversor de Temperaturas</h1>
      <div className='styles.container__entradas'>
        <Field temperature='celcius' value={celcius} onchange={setCelcius} />
        <Field
          temperature='fahrenheit'
          value={fahrenheit}
          onchange={setFahrenheit}
        />
        <Field temperature='kelvin' value={kelvin} onchange={setKelvin} />
      </div>
    </main>
  );
}

export default App;
