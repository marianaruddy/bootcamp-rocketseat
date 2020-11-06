## Métodos HTTP
- GET
- POST
- PUT/PATCH:
    PUT é para atualizar um reucrso por completo, PATCH é para atualizar uma informação especifica
- DELETE

## Tipos de parametros
- query params(ou parametros get):
    usados para filtros e paginação 
```
?queryparam1=value1&queryparam2=value2
```
da pra usar a aba no insominia
para pegar o valor podemos usar `request.query`

- route params:
    usados para identificar recursos na hora de atualizar ou deletar
```
/:id
```
para pegar o valor podemos usar `request.params`

- request body:
    usados para conteúdo na hora de criar ou editar um recurso (JSON)
    tem que adicionar:
```
app.use(express.json());
```
 antes de chamar o método, assim todos as chamadas saberão interptretar JSON