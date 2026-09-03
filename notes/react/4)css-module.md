
# 🏗 React


## 🎨📂 CSS module

- CSS Modules permitem definir estilos com escopo local ao componente/arquivo, evitando conflitos de classes no escopo global;
- Para usa-lo, defina a extensão do arquivo como  `.module.css` e importe no `jsx/tsx`como `import styles from "arquivo.module.css"`;
- Dentro do componente incorpore como `className={styles.nomeClasse}`;
- É comum utilizar um arquivo `.module.css` associado a cada componente, mantendo seus estilos organizados e próximos ao componente.



### 🤔 Diferenciações

#### 📝Comum:
- Arquivo de escopo global;
- importando: `import './style.css'` ;
- incluindo no elemento xml: `<div className="nome-classe"`; 

#### 🗂 Por módulo:
- Um arquivo por componente;
- extensão: .module.css;
- importando: `import styles from './source/style.module.css'` ;
- incomporando no elemento xml: `<div className={styles.nomeClasse}` ;


### 🎈 Considerações:
- Nome classes:
	- Se for com `-` ele deve ser declarado em `={styles['']}`;
	-Use nomes descritivos e contextualizados ao componente (como `mainContainer`, `header`, `formButton`, `productCard`, `userInfo`), evitando nomes excessivamente vagos (como `box` ou `div`);