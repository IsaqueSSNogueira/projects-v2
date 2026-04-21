
## Arredondar

- 🔽 Math.floor() -> arredonda a parte decimal, indo sempre para baixo. Exemplo: 
```
Math.floor(4.1) -> 4 // arredonda para baixo
Math.floor(-4.1) -> -5 // arredonda para baixo ficando negativo
```
- 🔼 Math.ceil() -> arredonda a parte decimal, indo sempre para cima. Exemplo:
```
Math.ceil(8.4) -> 9 // arredonda para cima
Math.ceil(-2.1) -> -1 // arredonda para cima, mais próximo do zero
```

- 🎡 Math.round() -> Arredonda pro mais próximo. Exemplo:
```
Math.round(2.3) -> 2 // para baixo
Math.round(2.7) -> 3 // para cima
Math.round(2.5) -> 3 // se for x.5, ele sobe
```

- ✂ Math.trunc() -> Corta a parte decimal, sem arredondar. Exemplo:
```
Math.trunc(10.3) -> 10 // cortou decimal
Math.trunc(10.7) -> 10 // cortou decimal
```