// App.js
import React, { useState } from "react";
import MyComponentDidMount from "./components/componentDidMount";
import MyComponentDidUpdate from "./components/componentDidUpdate";
import MyComponentWillUnmount from "./components/componentWillUnmount";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [someValue, setSomeValue] = useState(0);

  return (
    <div className="App">
      <h1>Життєвий цикл компонентів у React</h1>

      {/* Відображаємо компонент MyComponentDidMount */}
      <section>
        <h2>ComponentDidMount</h2>
        <MyComponentDidMount />
      </section>

      {/* Відображаємо компонент MyComponentDidUpdate і змінюємо його пропс */}
      <section>
        <h2>ComponentDidUpdate</h2>
        <p>Значення someValue: {someValue}</p>
        <button onClick={() => setSomeValue(someValue + 1)}>
          Збільшити значення
        </button>
        <MyComponentDidUpdate someValue={someValue} />
      </section>

      {/* Відображаємо або приховуємо компонент MyComponentWillUnmount */}
      <section>
        <h2>ComponentWillUnmount</h2>
        <button onClick={() => setShowComponent(!showComponent)}>
          {showComponent ? "Приховати компонент" : "Показати компонент"}
        </button>
        {showComponent && <MyComponentWillUnmount />}
      </section>
    </div>
  );
}

export default App;
