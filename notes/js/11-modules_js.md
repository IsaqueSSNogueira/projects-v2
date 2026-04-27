
# Modules


## No HTML
- Use `type="module"`:
`<script type="module" src="main.js" ></script>`
- `type="module"` já vem com `defer` incorporado; 



## No JS

### Arquivo secundários

- Exporte o que quer compartilhar:

```
export function loop(){
	...
}

export const value = "";

```


### No main.js

```
import { loop, var } from "./dino.js"
import { calc } from "./calc.js"

loop()
calc(var)

```


## Importante

- Sempre colocar `./` `../` e a extensão `.js`;
- Se for módulo, não funciona no navegador direto do local, mas no gitpages sim por ser http;