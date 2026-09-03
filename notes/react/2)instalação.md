
# 🏗 React

## 💿 Instalação e configuração

1) Será utilizado o Vite. No terminal crie o projeto e defina a configuração conforme o o processo for pedindo:

- `npm create vite@latest my-react-app -- --template react-ts `; 
- `> project name` `nome do projeto`;
- `> Select a frameword:` `React`;
- `> Select a variant:` `JavaScript` | `Typescript`;
- `> Which linter to use?` `EsLint`.

2) Entre na pasta, instale as dependências e inicie o servidor:

- `cd nome-projeto`;
- `npm install`;
- `npm run dev`;
- Vite irá retornar algo como `Local: http://localhost:5173/`, abra o endereço no navegador.


## 🗃 Arquivos


- **index.html** -> base principal que agora será apenas o receptor do React e não como foco de implementar do html. A div root irá ser o container de todos os componentes importados:

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>React App</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="/src/main.jsx" defer></script> <!-- index.js ou main.jsx, o arquivo principal que vai montar o react -->
  </head>

  <body>
    <div id="root"></div> <!-- Container para o aplicativo React -->
  </body>

</html>
```


- **index.js** ou **main.jsx** -> Arquivo principal em que será ponto de entrada da aplicação, onde você cria a raiz React e renderiza o componente principal, importado os estilos e renderizado no html dentro daquela div 'root': 


```
// Importa a biblioteca React
import React from 'react'; // não é mais necessário nessa versão         
import { StrictMode } from 'react'; // identifica problemas

// Importa o método para renderizar o React
import ReactDOM from 'react-dom/client';  

// Importa o componente principal da aplicação
import App from './App.jsx';            

// Importa estilos globais
import './index.css';

// Seleciona o elemento HTML com id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));  

// para renderizar no html
root.render(
  // React.StrictMode é uma ferramenta de diagnóstico usada no desenvolvimento
  <React.StrictMode> 
    // Renderiza o componente App dentro do elemento root
    <App />   
  </React.StrictMode>
);
```


- **index.css** -> opcional, funcionando exatamente como o style.css. Só garanta que ele está sendo importado no index.js;


- **App.jsx** -> É um componente principal em um projeto React, e sua função é servir como o componente de nível superior que contém outros componentes, também pode incorporar as **rotas** do **react router**:
  
```
import React from 'react';
// Importa outros componentes
import MeuComponente from './MeuComponente.jsx'; 

const App = () => {
  return (
    <div>
      <h1>Bem-vindo ao Meu App</h1>
      <MeuComponente />  {/* Usa o componente importado */}
    </div>
  );
};

export default App;
```

