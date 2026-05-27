

# throw new Error()

## Uso

- Para disparar (`throw`) e criar um erro (`new Error()`);
- Dentro de `try/catch`;
- Principalmente quando algo não deveria acontecer;
- Exemplo com api:
```
const res = await fetch(url)

if (!res.ok) {
  throw new Error("Erro na API")
}
```
- Se a API falhar **você força um erro e evita continuar com dados inválidos**;


## Fluxo

1) Cria um erro;
2) Interrompe a execução;
3) Joga o erro pro catch.