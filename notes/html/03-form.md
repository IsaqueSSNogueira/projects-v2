
## Elements

<!-- fieldset -->
### fieldset

- Usado para envolver um grupo de inputs relacionados, como em um formulário mesmo, utilizado antes do form:
 - `<fieldset id=""></fieldset>`

<!-- form -->

### form
- `<form>` -> 
 - `action=""` -> 
 - `method=""` ->
 - `enctype=""`->`

<!-- inputs -->

### input

- Tipo de inputs (`<input type="">`):
 <!-- texto -->
 - `text` ->  
 - `email` ->  
 - `password` ->  
 - `tel` ->  
 - `urk` -> 
 <!-- number -->
 - `number` ->
 <!-- marks -->
 - `radio` ->
 - checkbox ->
 <!-- especiais -->
  - `range` ->
  - `color` ->
  - `file` ->   
  <!--time/date -->
  - `date` ->
  - `time` ->
  - `datetime-local` ->
  - `month` ->
  - `week` ->
  <!-- others -->
  - `submit` ->
  - `reset` ->
  - `button` ->

#### Atributos de input

- name;
- value (valor padrão);
- placeholder;
- required;
- readonly;
- disabled;
- `autocomplete="off"`: Remove sugestões com base em ultimas digitações no input.

textarea:
- name;
- rows;
- cols;
- placeholder;
- required;

select:
- name;
- multiple;
- size;
- required;

option:
- value;
- selected;
- disabled;

button:
- type;
- name;
- value;
- disabled;

label:
- for;



## Ações

### Remover comportamentos padrão

- No js, ao incomporar um evento a um elemento:

```
element.addEventListener("click", (event) => {
    event.preventDefault()
    ....
})
```

_//_