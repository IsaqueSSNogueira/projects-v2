
# DOM

## O que seriam seletores?

- Seletores são formas de referenciar elementos do HTML, muito usados no CSS e também no JavaScript. Principais tipos:

- `<tag>` → seleciona pelo nome da tag;
- `#id` → identificador único de um elemento;
- `.class` → seleciona múltiplos elementos com a mesma classe.

## Captura de seletores

- Padrão tradicional, não muito usado ultimamente:
 - Retorna único elemento:
	`const elemento = document.getElementById("")`
    
 - Html collection, não pode ser aplicado forEach e retorna um "array" que tem que ser acessado por indices. Ela se atualiza automáticamente, como uma coleção viva, podendo causar bugs inesperados:
   ```
	const elemento = document.getElementsByClassName("")
	const elemento = document.getElementsByTagName("")
   ```

- Padrão moderno, querySelector, aceita qualquer seletor css e é mais consistente. Uma das vantagens é de não se atualizar sozinha:
 - ```
 	const element = document.querySelector("") // escolha com base no seletor (tag, #, .)
 	const element = docuemnt.querySelectorAll("") // bom para interações

 ```

