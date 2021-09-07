# Node.js com EJS: HTML Inteligente

**Instrutora**: Jakeliny Gracielly | **Empresa**: RocketSeat

## 1. Criando o HTML

Estrutura de `header`, `main` e `footer ` criada com HTML e estilizada com Boostrap.



## 2. Criando o servidor

* Para iniciar a configuração, instalar o EJS e o EXPRESS, rodar os comandos `npm install ejs` e `npm install express`

* Os arquivos EJS mapeados nas rotas devem estar contidos em um diretório chamada `views`

  

## 3. Separando partes do layout

Cada bloco de conteúdo da página que pode ser reaproveitado é separado em um arquivo `.ejs`. Para incluir este bloco em qualquer outro arquivo, a sintaxe é `<%- include(ejs_file_name) %>`.



## 4. Nova página e menu 

Foi criada uma página sobre, que reaproveitou os blocos de conteúdo individualizados anteriormente.



## 5. Views e partials: organização 

Para fins de organização, é interessante manter as páginas e os blocos em diretórios separados. Por isso, foram adicionados os diretórios `pages` e `partials` ao `views`.



## 6. Passando um objeto para EJS 

Além de incluir blocos de HTML, é possível transferir objetos entre esses blocos. A sintaxe é a mesma, basta passar o objeto como segundo argumento: 

```ejs
<%- include(ejs_file_name, {prop: 'values'}) %>
```

Para receber o objeto, `<%- prop %>`. Incluindo alguma lógica, fica 

```ejs
<%= prop != 'undefined' ? prop : 'Default' %>
```



## 7. Foreach

Para cada trecho que código incluído no HTML, é necessário que haja as tags EJS o envolvendo. Desta forma, é possível rodar utilizar quase todas as possibilidade do JS dentro do HTML.



