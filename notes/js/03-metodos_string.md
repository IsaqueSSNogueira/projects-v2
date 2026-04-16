
## Recorte

/*slice*/
### Slice
- Copia um trecho do item:
```
/*tudo menos ultimo caractere*/
let newString = string(0, -1)

/*ultimo item*/
`let newString = string(-1)`
```
- Pode também ser usado o `.at(-1)` para buscar o último item, mais moderno;
`let newString = string.at(-1)`


## Verificação
/*includes*/

### Includes
- Verifica se o item está na string, retornando booleano: `string.includes("")`;
- Há também o `startWith()` e `endswith()`, verificar se inicia ou termina com respectivo caractere;
- Utilize `some` para verificar se há ao menos um item dentro de um escopo maior;

/*some*/

### Some

- Verificar se ao menos um item de um array atende a condição, um loop de fatoração:

```
const letras = ["a", "b", "c"]
const nome = "Camila"

const háLetra = letras.some(item => nome.includes(item))
```

## Conversão


## toString

- Converte para string (aprendi após precisar com o eval): `const newString = number.toString()`