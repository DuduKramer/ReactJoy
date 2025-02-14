import React from 'react';

const App = () => {
  const [cores, setCores] = React.useState(['vermelho']);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(
        cores.filter((cor) => {
          return cor != target.value;
        }),
      );
    }
  }
  console.log(cores);

  function checkColor(cor) {
    return cores.includes(cor);
  }
  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor}>
          <input
            type="checkbox"
            value={cor}
            checked={checkColor(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
       <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;

/*    <label>
        <input
          type="checkbox"
          value="azul"
          checked ={checkColor("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked = {checkColor('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label> */
