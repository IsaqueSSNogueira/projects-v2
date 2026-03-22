# CSS
<!-- reset -->
## Reset
```
* {
	margin:0;
	padding:0;
	box-sizing:border-box;
	border:none;
}

body {
	overflow:hidden;`
	color:#000;
}

a {
	color:#000;
	text-decoration:none;
}

ul, ol {
	list-style:none;
}

```
<!-- position -->
## Position

- static → normal
- relative → posiciona conforme a posição original, ajusta sem sair do fluxo, espaço ainda reservado, ideal para ajustes e ser refêrencia como elemento pai
- absolute → posiciona conforme a posição do pai, sai do fluxo, ideal para sobreposiçoes
- fixed → fixo na tela, ideal para botôes flutuantes e cabeçalhios fixos
- sticky → gruda quando chega no limite, ideal para cabeçalhos que fixam ao rolar

### Centralizar com position absolute
<!-- centralizar -->
- `left: 0; right: 0; margin: auto; width:Xpx;` → centraliza horizontalmente (precisa de width)
<!-- melhor forma -->
- `top: 50%; left: 50%; transform: translate(-50%, -50%);` → centraliza total

<!-- ::before ::after -->
## ::before ::after
- Não esquecer do `content: "";`
- Usar `::before` e `::after` (padrão moderno)
- Pode misturar pseudo-classes:
  `elemento:checked::before {}`

## pointer-events

- `pointer-events: none;` → o elemento fica visível, mas não responde a interações de ponteiro (mouse, toque, caneta):
- O elemento não recebe eventos como clique ou hover;
- As interações passam para elementos que estão atrás dele;
- Interessante para usar em pseudo-elementos.

## --webkit
- Com base em alguns padrões dos navegadores, geralmente é acessado para remover os prefixos e buscar manter igualidade da aplicação onde for rodar;
```
/*inputs, usados como em checkbox*/
# {
	-webkit-appearance: none;
	appearance: none;
}
#

/*remover reação ao toque no mobile, que costuma deixar um :active azul*/
# {
    -webkit-highlight-tap-color:transparent;
}

/* outros*/
- -webkit-user-select → controle de seleção
- ::-webkit-scrollbar → customizar scroll
- ::-webkit-inner-spin-button → input number
- -webkit-line-clamp → limitar linhas de texto
- :-webkit-autofill → estilizar autofill

```
## Clip-path e truques para criar formas

- `clip-path: polygon(10% 0, 90% 0, 100% 100%, 0 100%);`









