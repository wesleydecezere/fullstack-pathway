# Introdução ao ReactJS

**Instrutor**: Bruno Carneiro | **Posição**: Front-End Architect no Luiza Labs



## 2. Integrando webpack ao desenevolvimento com ReactJS

### 2.1 O que é webpack?

> **Module bundler**: empacotador de módulos para apps JS, que são utilizados no HTML.



#### Conceitos

* Entry point: Ponto de entrada para buscar todos os módulos e dependências
* Output: bundlers que serão exportados
* Loaders: permite o gerenciamento de arquivos não-JS
* Plugins: otimizar 
* Mode: possibilita configurar os módulos como production, que trás otimizações internas, delevopment, que executa três pluguins básicos,  ou none.



### 2.2 Configurando o webpack

1. Instalação

   ```bash
   npm i -D webpack webpack-cli
   ```

2. Criar  o arquivo `webpack.config.js` de configuração do webpack

   ```js
   const path = require('path')
   
   module.exports = {
     devtool: 'source-map',
     entry: './src/index.js',
     output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'qualquernome.js'
     },
     module: {
       rules: [
         {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
           }
         }
       ]
     }
   }
   ```

3. Adicionar o Babel

   ```bash
   npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
   ```

4. Criar o arquivo `.babelrc`

   ```json
   {
     "presets": [
       "@babel/preset-env",
   	"@babel/preset-react"
     ]
   }
   ```

5. Instalar React e ReactDOM

6. Criar a estrutura do App ReactJS

7. Rodar o webpack como desenvolvimento

   ```bash
   webpack --mode development
   ```



8. Instalar plugin para HTML

   ```bash
   npm i -D html-webpack-plugin
   ```

9. Incluir o plugin no arquivo `webpack.config.js`

   ```json
   const HtmlWebPackPlugin = require('html-webpack-plugin')
   
   module.exports = {
     ...,
     plugins: [
       new HtmlWebPackPlugin({
         template: "./src/index.html",
         filename: './index.html'
       })
     ]
   }
   ```

10. Instalar o `webpack-dev-server`
11. Iniciar o dev-server



Há algumas configurações que permitem gerar arquivos de bulder modulares, que são menores e mais leves.



### 2.3 Instalando e configurando o ESLint

* Permite configurar padrões de sintaxe de código, que podem ser verificados em tempo de desenvolvimento

* Um padrão muito utilizado é o AirB&B

  

Instalação

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch
```



Criação do arquivo `.eslintrc`

```json
{
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "semi": [
      2,
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "no-extra-parens": "error",
    "max-len": [
      "error",
      {
        "code": 100
      }
    ],
    "no-multi-spaces": "error"
  },
  "settings": {
    "react": {
      "version": "16.8"
    }
  }
}
```





