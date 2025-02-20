import React from 'react';
import Radio from './Form/Radios';
 
const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({});
  const [perguntaAtual, setPerguntaAtual] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [target.name]: target.value,
    }));
  }

  function handleNext() {
    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      verificarRespostas();
    }
  }

  function verificarRespostas() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}!`);
  }

  return (
    <div>
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            verificarRespostas();
          }}
        >
          <Radio
            pergunta={perguntas[perguntaAtual].pergunta}
            options={perguntas[perguntaAtual].options}
            id={perguntas[perguntaAtual].id}
            value={respostas[perguntas[perguntaAtual].id]}
            onChange={handleChange}
          />
          {perguntaAtual < perguntas.length - 1 ? (
            <button type="button" onClick={handleNext}>
              Próxima
            </button>
          ) : (
            <button type="submit">Verificar respostas</button>
          )}
        </form>
      )}
    </div>
  );
};

export default App;