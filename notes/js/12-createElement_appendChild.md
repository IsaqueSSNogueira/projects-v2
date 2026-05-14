
# 🎈 Aula

## createElement

- Função usada para criar algum elemento html a partir do css;
- Útil em cenários de expansão conforme conteúdo interno;
- É integrado a um elemento pai via `appendChild`;
- Pode receber elementos internos via `innerHTML`, mas esses elemento não recebem funções diretas (caso haja, crie mais elementos e atribua a esse elemento);
- Exemplo:


```
const linhaTabela = document.createElement("tr")

linhaTabela.innerHtml = `

	<td>Item 1</td>
	<td>Item 2</td>
	...
`

const button = document.createElement("button")
button.addEventListener("click", () => {...})
``` 


## appendChild 

- Daqui você integra os itens criados a um elemento pai:

```
const elementoPai = document.querySelector("table")

...
...
linhaTabela.appendChild(button)
elementoPai.appendChild(linhaTabela)

```