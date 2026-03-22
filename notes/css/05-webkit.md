
## --webkit
- Com base em alguns padrões dos navegadores, geralmente é acessado para remover os prefixos e buscar manter igualidade da aplicação onde for rodar;
```
/* muito usado em inputs,como em checkbox, pra remover os estilos padrão e refazer do zero*/

# {
	-webkit-appearance: none;
	appearance: none;
}

/*remover reação ao toque no mobile, que costuma deixar um :active azul*/
# {
	  -webkit-tap-highlight-color: transparent;
}

/* outros*/
- -webkit-user-select → controle de seleção
- ::-webkit-scrollbar → customizar scroll
- ::-webkit-inner-spin-button → input number
- -webkit-line-clamp → limitar linhas de texto
- :-webkit-autofill → estilizar autofill

```