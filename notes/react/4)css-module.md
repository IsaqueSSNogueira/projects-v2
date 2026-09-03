
# 🏗 React


## 🎨📂 CSS module

- CSS Module é uma forma de incorporar os estilos de maneira separada para um respectivo arquivo, sem que eles caiam direto no escopo global;
- Para isso, defina a extensão do arquivo como  `.module.css` e importe no `jsx/tsx`como `import styles from "arquivo.module.css"`;
- Dentro do componente incorpore como `className={styles.nomeClasse}`.


### 🤔 Diferenciações

#### 📝Comum:
- Arquivo global, um único arquivo CSS para todo o projeto (assim como de costume);
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
	- Use nomes genéricos, mas contextualizados ao componente, como `mainContainer`, `header`, `formButton`;
	- Não precisa exagerar na diferenciação, mas evite nomes excessivamente vagos como `box` ou `div`;
	- Dê uma leve personalização se necessário, como `product-card`, `user-info`.