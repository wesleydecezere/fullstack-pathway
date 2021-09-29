# Introdução aos React Hooks

**Instrutor**: [Celso Henrique](https://github.com/celso-henrique) | **Posição**: Engineering Lead at Creditas

## 3 Finalizando o projeto

### 3.1 Trabalhando com testes e qualidade

#### `useEffect`

> Executa uma função sempre que alguma das propriedades indicadas for alterada.

* Se nenhuma propriedade é informada (`[]`), executa a função somente na montagem do componente.

* Se ele retornar uma função, ela é executada quando o componente for desmontado.

* Utilizado para fazer a primeira chamada ao servidor

### 3.2 Conclusão do projeto

#### `useRef`

> Como um *state*, mas pode ter seu valor atualizado mesmo antes da montagem ou após a desmontagem do componente

* Utilizado para detectar quando o componente é desmontado

#### Teste coverage

```bash
npm test  --coverage --watchAll=false
```
