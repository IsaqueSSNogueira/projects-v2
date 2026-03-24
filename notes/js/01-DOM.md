
# DOM

## O que seriam seletores?

- Seletores são formas de referenciar elementos do HTML, muito usados no CSS e também no JavaScript. Principais tipos:

- `<tag>` → seleciona pelo nome da tag;
- `#id` → identificador único de um elemento;
- `.class` → seleciona múltiplos elementos com a mesma classe.

## Captura de seletores

### Padrão tradicional (não muito usado hoje em dia):
 - Retorna único elemento:
	`const elemento = document.getElementById("")`
    
 - Html Collection, não pode ser aplicado forEach e retorna uma espécie de "array" que tem que ser acessado por indices. Ela se atualiza automáticamente, como uma coleção viva, podendo causar bugs inesperados:
   ```
	const elemento = document.getElementsByClassName("")
	const elemento = document.getElementsByTagName("")
   ```

### Padrão moderno (querySelector): 
- Aceita qualquer seletor css e é mais consistente. Uma das vantagens é de não se atualizar sozinho e poder ser aplicado forEach, já que se trata de uma NodeList:
 - ```
 	const element = document.querySelector("") // escolha com base no seletor (tag, #, .)
 	const element = docuemnt.querySelectorAll("") // bom para interações