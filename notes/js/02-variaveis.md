# Váriáveis


## Váriaveis

Caixa que armazena dados, sendo representada pelo nome dado a variável:

### Tipos:
- let: um tipo de variável que seu valor pode ser reatribuido;
- const: um tipo de variável que tará um valor fixo que não será alterado (mas tbm usado para criar funções de expressão e useState no react - esse sim pode ser reatribuido);
- var: método de criação de variável antigo, antes de let e const, o qual permite reatribuir valores e até redeclarar no mesmo escopo, aumentando a chance de erros.

## Escopo 

Se trata de qual contexto a variável é acessível no código:

- Global: não está dentro de nenhum bloco ou função, e é acessível em qualquer parte do código, não podendo ser redeclarada;

- função: declarado dentro de uma função e acessível somente nela (caso queira acessar algum valor só com return ou como argumento de uma função), podendo ser redeclarada fora dela (de preferência fora do contexto global);

- bloco: dentro de {} (condicionais, loops, etc...), acessível somente dentro do bloco, podendo ser redeclarada fora dele (de preferência fora do contexto global);

### De dentro pra fora: 
Escopos internos podem acessar variáveis externas. A vantagem em usar let e const é que podem ser redeclaradas somente em escopos separados, diferente de var (que permitia redeclarar no mesmo escopo, aumentando a chance de erros).


_//_


## Tipo de valores

- string: valores de texto, representados quando estão entre aspas (um número também pode ser string);

- number: valores de números, usados para cálculos matemáticos (se o número for string não é possivel fazer operações, utilize  `parseInt()` e `parseFloat()` para a conversão, utilizando sempre isNaN() como verificação)

- booleano (true ou false): usado principalmente como variáveis de controle (na lógica) e de valores binários (como pra representar "sim" e "não"). Todo valor pode ser usado como verificação booleana, pois cada um pode representar true ("texto", 3, etc...) ou false ("", undefined, 0);

- null: variável declarada sem haver algum valor/tipo específico, isso de maneira intencional e possivelmente para ser reatribuída posteriormente; 

- undefined: sem valor/tipo definido, geralmente variáveis que foram apenas declaradas (sem atribuir nenhum valor) ou que não foram inicializada, sendo uma consequência e não algo que seria intencional.


### Formas de renderizar variáveis com strings: 

- Concatenção: `"texto" + variavel`; (forma simples e funcional)
- Template literals: `texto ${variavel}`; (muito útil em textos maiores, podendo ter as variáveis introduzidas no meio deles)


### Verificar o tipo:

- typeof: Retorna uma string com tipo o valor:
```
/*exemplo*/
const variavel = "uow";
typeof variavel // string

if(variavel === "string") // true
```

_//_