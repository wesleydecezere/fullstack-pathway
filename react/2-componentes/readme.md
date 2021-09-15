# Trabalhando com Componentes no ReactJS

**Instrutor(a)**: Nathally Souza | **Posição**: Customer Experience na Z1



## Check-list

- [x] Estrutura
- [ ] Ciclo de vida
- [x] SPA
- [x] Modularização
- [x] Boas práticas



## 1. Desenvolvendo um Hello World no App.js

Criando o projeto 

```bash
npx create-react-app react-app-name
```



## 2. Primeiros passos na estrutura de um componente

Criando um componente simples



## 3. Criando um componente dinâmico

`useState`

* Pode ser utilizado para tornar componentes dinâmicos, com variáveis que podem ser atualizadas com base em alguma regra ou acessadas por outros componentes 

```jsx
const Component = () => {
	const [value, setValue] = useState(initialValue)

    ...
}
```

