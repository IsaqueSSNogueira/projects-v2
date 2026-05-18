
# ⭕ Typescript

## 🤔 O que é?

Typescript é básicamente um Javascript com superpoderes;

### 🤯 Resumo simples

- É um `superset do JS`, ou seja, tudo o que funciona no JS funciona nele;
- Adiciona tipagem estática, em que você define tipos (string, number, boolean, etc...);
- Ajuda a evitar erros antes de rodar o código;
- Precisa ser compilado para JS para rodar no navegador ou Node.
- Exemplo:
**Javascript**
```
let nome = "Isaque";
nome = 10; // permitido (pode dar erro depois)
```

**typescript**
TypeScript:
```
let nome: string = "Isaque";
nome = 10; // ❌ erro na hora
```


## 🚀 Por que usar?

- Código mais seguro;
- Melhor organização em projetos grandes;
- Ajuda muito com autocompletar e leitura de código.

*TypeScript é JavaScript com regras que te ajudam a não fazer cagada 😄*...



## 🤨 Então ele não é uma linguagem? 

- Ele é sim uma linguagem, mas que precisa ser convertida (transpilada) pra js para rodar, pois não roda diretamente, assim como o react.js. Uma linguagem completa em acima do js, possuindo tipos, regras, estrutura e recursos de linguagem


## 😎 Como implementar? (na prática)

1) Instalar no projeto: `>> npm install -g typescript`;
2) Crie o arquivo `.ts` e escreva no padrão typesript. Exemplo: `const idade: number = 18;`;
3) Compile para `.js`: `>> tsc arquivo.ts` (isso gera `var idade = 18;`);
4) Rode normalmente: `>> node arquivo.js`.


## ☕ No dia a dia 

Em projetos reais (React, Node, etc), você NÃO fica rodando tsc manualmente. Você usa:

- `tsconfig.json` → configura o TS;
- Bundlers tipo `Vite`, `Webpack`, `Next.js` (eles já fazem TS → JS automaticamente)

*TypeScript é uma “camada inteligente” em cima do JavaScript que te obriga a escrever código mais seguro antes de rodar...*


## 💡 Resumão direto

1) ✔ É uma linguagem;
2) ✔ Baseada em JavaScript;
3) ✔ Adiciona tipagem e regras;
4) ✔ Precisa ser convertida pra JS;
5) ✔ Muito usada em projetos grandes (React, Node, etc).

*Ele atua antes da execução > serve pra validar, tipar e estruturar > e some depois da compilação...*