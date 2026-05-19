
# ✔❗ Try e catch


## 🤔 Tipos de erro, quem trata?

- `fetch` só dá erro no catch se a requisição falhar;
- Erro HTTP (400, 500...) não vai para catch. Sendo assim, o `res.ok` vem pra tratar erros de negócios.

Exemplo: 

```
try {
	const response = await fetch(...);

	const data = await response.json();

	if (!response.ok) {
		// erro do backend
		alert(data.message);
		return;
	}

	// sucesso
	alert("OK");

} catch (err) {
	// erro de rede
	alert("Servidor fora");
}
```

- Erro de rede: `catch`;
- Erro do backend (HTTP): `response.ok === false`


## 📌 Erros capturados por cada um

### catch

```
// servidor caiu
// sem internet
// URL errada
// erro de JS
```

### res.ok

```
400 Bad Request
401 Unauthorized
409 User already exists
500 Server error
```

## 😎 response.ok

1) Ele vem do objeto Response do fetch, não do JSON;
2) Ele possui propriedades internas do HTTP (`response.status - 200, 404, 500...`, `response.ok - true ou false`;
3) *O que é "OK"?* - Se for true (status entre 200–299), se for false (qualquer erro HTTP);
4) *"Por que não usar data pra isso?"* Porque `data` é o corpo da resposta (body), `response` é o metadado HTTP


## 👮‍♂️ catch

- Caso o `response.ok` seja false, o backend retornou um erro HTTP (400, 500, etc);
- O `data` NÃO necessariamente vem corrompido — ele pode vir normal com uma mensagem de erro;
- O `catch` só será acionado se houver erro ao fazer a requisição OU ao converter o JSON.



## ✏📓 Conclusão

**Ambos precisam ser usados durante a construção da integração do frontend com o servidor**