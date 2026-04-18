
# Canvas


## Funcionamento

### Como o canvas funciona 

O canvas é um bitmap (um “quadro de pixels”)

- Não tem objetos; 
- Não tem memória de formas;
- Não sabe o que é “dino”, “quadrado”, nada.

Ele só guarda pixels pintados



_//_

## Base

### ctx - Contexto do desenho do canvas. É a caneta que você usa para desenhar
```
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
```
...aqui você diz "quero desenhar em 2d neste canvas".

O papel do ctx -> O ctx é literalmente uma API de desenho. Tipo um pincel digital que fala:

- “pinta isso aqui”;
- “limpa isso aqui”;
- “desenha linha aqui”.

### Insight

- Provavelmente toda lógica é separada e ele é usado apenas para renderizar;



_//_

## Funcionamento
- canvas é como uma tela em branco, ctx é um pincel e esse quadro sempre precisa ser atualizado. É importante a cada quadro que a tela seja limpada, senão há acumúlo de "sprites":
`/*limpar tela*/
ctx.clearRect(0, 0, canvas.width, canvas.height);
`



_//_

## Renderização inicial 
```
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
 
canvas.width = container.clientWidth | Xpx
canvas.height = container.clientHeight | Xpx
```



_//_

## Modelos
- x, y, width, height:
```
/*desenhar retângulo*/
ctx.fillStyle = "yellow";
ctx.fillRect(50,50,30,30);

/*desenhar outro objeto*/
ctx.fillStyle = "green";
ctx.fillRect(100, 100, 20, 40);

/*desenhar texto*/
ctx.fillText("Score: 10", 10, 20);
```



_//_

## importantes
- canvas não guarda o desenho automaticamente, tem que sempre reenderizar tudo o tempo todo;
- ordem importa, como visto em:
```
/*desenho primeiro, coloriu depois*/
ctx.fillRect(10, 10, 10, 10)
ctx.fillStyle = "yellow"


/*ideal*/
ctx.fillStyle = "yellow"
ctx.fillRect(10, 10, 10, 10)
```
- Melhorar a resolução:
```
canvas.width = 600;
canvas.height = 300;
canvas.style.width = "300px";
canvas.style.height = "150px";
```



_//_

## Lógica de um jogo

1) Limpar;
2) Atualizar estado;
3) Renderizar tudo denovo;
4) Repetir

```

/*1*/
ctx.clearRect(0, 0, canvas.width, canvas.height)

/*2*/
dino.y += gravidade

/*3*/
ctx.fillRect(dino.x, dino.y, dino.w, dino.h)

/*4*/
requestAnimationFrame(loop)

``` 



_//_

## requestAnimationFrame()

- Loop para fazer repetir algo;
- Substitue o setInterval, funcionando como uma espécie de callback que atualiza de maneira mais suave, mais eficiente e sendo o padrão dos jogos web;
- Exemplo:
```
function loop() {
  console.log("rodando");

  requestAnimationFrame(loop);
}

loop();
```

- Estrutura de um jogo:
``` 
// variável de controle
let running = true;

function gameLoop() {

  // condição
  if (!running) return;

  // limpar
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // atualizar lógica
  dino.x += 2;

  // desenhar
  ctx.fillRect(dino.x, dino.y, dino.w, dino.h);

  // próximo frame
  requestAnimationFrame(gameLoop);
}

gameLoop();
```
- Mais profissional:
```
let running = true;
let animationId;

function gameLoop() {
  if (!running) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  animationId = requestAnimationFrame(gameLoop);
}

/*parar*/
running = false;
cancelAnimationFrame(animationId);


```



_//_