
# Modules


## No HTML
- Use `type="module"`:
`<script type="module" src="main.js" ></script>`
- `type="module"` já vem com `defer` incorporado; 



## No JS

### 📝 Arquivo secundários

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

<br>


## 📤📥 Exportar/Importar

No ES Modules (import/export), você precisa exportar de forma explícita: como default ou como named export.

1) 
```
// exportar
let users = ...
export { users }

// importar
import  { users } from "..."
```
2)
```
// exportar
let users = ...
export default users

// importar 
import users from "..."
```


## Namespace import

- ✨ "Namespace import" ou "Importação com alias de módulo inteiro";
- 🔥 Ele pega TUDO que foi exportado do arquivo e junta num objeto;
- `import * as objeto from "..."`;

<br>

- arquivo exportar
```
export const foundUser = () => {}
export const createUser = () => {}
```
<br>

- arquivo a importar
```
import * as loginService from "../services/loginService.js";

// Por debaixo dos panos vira isso
loginService = {
  foundUser: [Function],
  createUser: [Function]
}
```
<br>

- Uso:
```
loginService.foundUser(...)
loginService.createUser(...)
```

<br>

## ❗ Importante

- Sempre colocar `./` `../` e a extensão `.js`;
- Se for módulo, o navegador trata como `módulo ES` e bloqueia em `file://` por segurança (CORS). Sempre use um servidor (live server, npx serve, npm run dev (para frameworks), gitpages, hospedado, `http://localhost`, etc...);
- Se uma função não estiver diretamente no arquivo global, não é possivel usar `onClick`. Defina a partir do `addEventListener`;
- Tudo que será importado precisa ser exportado `export`, seja funções ou variáveis;
- Não é possivel alterar valores de uma var dentro do main, ele somente lê e chama funções. Altere o arquivo local.