# BOOTCAMP ROCKETSEAT

## Backend

### Métodos HTTP
- GET
- POST
- PUT/PATCH:
    PUT é para atualizar um reucrso por completo, PATCH é para atualizar uma informação especifica
- DELETE

### Tipos de parametros
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

### Middlewares
interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição
para aplicar um middleware em apenas uma chamada (get, por exemplo), podemos colocá-lo entre o enedereço e a função:
```
app.get('/projects', logRequests, middleware1, middleware2, (request, response) => {
```

## Frontend

### Iniciando projeto

```
yarn init -y
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
yarn add @babel/cli
```
OBS: para mobile trocar o `react-dom` por `react-dom`

- Babel: converte (transpila) o código do React paraum código que o browser entenda 

- Webpack: converte o código de uma maneira diferente para cada tipo de aquivo (.js, .css, .png, ...)

- Loaders (babel-loader, css-loader, image-loader): são usados pelo Webpack

OBS: na aula é dito pra usar `yarn webpack-dev-server --mode development`, mas só funcionou com `yarn webpack serve --mode development`

#### Componentização

- arquivos de componentes comceçam com letra maiúscula

#### Conceitos importantes

- componentes
- propriedades
    - a propriedade children é criada automaticamente
- estado e imutabilidade
    - a função `push` nao respeita o conceito de imutabilidade;
    - para manter o conceito de imutabilidade faça, por exemplo:
```
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
    setProjects([ ...projects, `Novo projeto ${Date.now()}`]);
```

#### Outros

- o segundo parametro do `useEffect` é chamado `array de dependências`
