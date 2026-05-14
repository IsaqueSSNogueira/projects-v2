
# 🔄 Loops


## For 

- `for(let i = 0; i < 5; i++)`;
- Loop clássico, controle total. 
- Útil em indices, contagens, pular itens;



## While

- Usado quando você não sabe quantas vezes vai rodar;
- Depende de condição externa;
- Usado em jogos, esperar resposta, etc...;
- Exemplo:
```
let i = 0;

while (i < 5){
	console.log(i)
	i++
}
```



## For Of
- `for (const item of items){}` 
- arrays;



## For In
- `for (const key in items){}`;
- objeto;
- Exemplo:
```
for (const key in items){
	const value = items[key]; // pega o valor
	const key = key // pega o nome da chave
}

```



## ForEach
- `forEach((item) {})`;
- Interador mais prático;
- Algumas coisas ele não intera, como dentro de funções assícronas (por não esperar);

