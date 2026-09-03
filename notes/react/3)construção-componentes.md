
# 🏗 React

## 💡 App

- **App.jsx**: É um componente principal em um projeto React, e sua função é servir como o componente de nível superior que contém outros componentes. Estrutura:
  
```
import React from 'react'; // não necessário importar
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


## Componentes 


- Em um projeto React, cada componente geralmente é definido em um arquivo separado com a extensão .jsx (ou .tsx, se preferir), e esses componentes são importados para o App.jsx ou outros componentes conforme necessário.

- Benefícios
	- Organização: Mantém seu código modular e organizado;
	- Reutilização: Facilita a reutilização de componentes em diferentes partes do aplicativo;
	- Manutenção: Torna a manutenção e a atualização do código mais gerenciável.

- É importante exportar os componentes criados de dentro de seu respectivo arquivo e importa-lo no App.jsx:

```
import React from 'react'; // !!não mais necessário importar

// componente
const MainContent = () => {
  return (
    <main>
      <p>Conteúdo Principal</p>
    </main>
  );
};

// exportar o componente, deixando disponivel para a importação
export default MainContent;
```

```
import React from 'react'; // não mais necessário importar

/* componentes a serem importados */
// Importa o cabeçalho
import Header from './Header';
// Importa o menu lateral  
import Sidebar from './Sidebar';     
// Importa o conteúdo principal
import MainContent from './MainContent'; 


const App = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

// aqui também está exportando o App, isso para ser usado no index.js (ou main.jsx)
export default App;
```

- **JSX** -> JSX é uma extensão de sintaxe do JavaScript que permite escrever uma estrutura semelhante ao HTML dentro do código JavaScript/TypeScript, facilitando a descrição da interface;
- No JSX, muitos atributos seguem a convenção camelCase, como className, onClick e tabIndex, em vez da nomenclatura tradicional do HTML.



### Criação e importação de um componente

Passos para Criar um Componente React:
1. Criar o Arquivo do Componente;
2. Definir o Componente;
3. Exportar o Componente;
4. Importar e Usar o Componente.


- Por convensão, arquivo.jsx tem que ter o mesmo nome do componente, tendo como padrão o PascalCase. Não que seja obrigatório, mas é para manter limpo, claro e padronizado;


```
/* from Button.jsx */
import React from 'react'; // não necessário ser importado, só no App (nem nele mais)

// Definindo o componente de botão
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
```

```
import React from 'react'; // não necessário importar
import Button from './Button'; // Importa o componente Button

const App = () => {
  // Função que será chamada quando o botão for clicado
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div>
      <h1>Meu App</h1>
      <Button label="Clique Aqui" onClick={handleClick} /> {/* Usa o componente Button */}
    </div>
  );
};

export default App;
```
 
- Parênteses () podem ser usados para organizar um retorno JSX que ocupa várias linhas. Eles não são obrigatórios para retornar JSX;
- Tags que não possuem fechamento no html convencional (como img) precisam ter seu fechamento declarado, sendo autofechada ()`<img/>`. No JSX, elementos sem conteúdo precisam ser autoclosados, como <img />, <input /> e <br />.