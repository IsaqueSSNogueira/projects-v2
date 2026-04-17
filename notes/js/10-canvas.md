
# Canvas

## Base
- ctx: Contexto do desenho do canvas. É a caneta que você usa para desenhar
```
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
```
...aqui você diz "quero desenhar em 2d neste canvas".



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



## Funcionamento
- canvas é como uma tela em branco, ctx é um pincel e esse quadro sempre precisa ser atualizado. É importante a cada quadro que a tela seja limpada, senão há acumúlo de "sprites":
`/*limpar tela*/
ctx.clearRect(0, 0, canvas.width, canvas.height);
`



## Renderização inicial 
```
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
 
canvas.width = container.clientWidth | Xpx
canvas.height = container.clientHeight | Xpx
```


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




```
canvas.width = 600;
canvas.height = 300;
canvas.style.width = "300px";
canvas.style.height = "150px";
```