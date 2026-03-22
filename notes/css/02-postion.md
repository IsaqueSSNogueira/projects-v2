<!-- position -->
## Position

- static → normal
- relative → posiciona conforme a posição original, ajusta sem sair do fluxo, espaço ainda reservado, ideal para ajustes e se tornar refêrencia como elemento pai
- absolute → posiciona conforme a posição do pai, sai do fluxo, ideal para sobreposiçoes ou posicionamento específico
- fixed → fixo na tela, ideal para botôes flutuantes e cabeçalhios fixos
- sticky → gruda quando chega no limite, ideal para cabeçalhos que fixam ao rolar

### Centralizar com position absolute
<!-- centralizar -->
- `left: 0; right: 0; margin: auto; width:Xpx;` → centraliza horizontalmente (precisa de width)
<!-- melhor forma -->
- `top: 50%; left: 50%; transform: translate(-50%, -50%);` → centraliza total
