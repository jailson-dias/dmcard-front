# Frontend DMCard

Eu escolhi fazer o projeto com Vue, porque é o framework que eu estou mais acostumado a trabalhar para web, já usei React algumas vezes, mas preferi fazer com Vue.

## Descrição do projeto

O frontend do desafio de código da DMCard tem 3 telas, uma para fazer solicitações de cartão de crédito, uma para login na área administrativa e a última é a dashboard, onde fica listado todas as solicitações de cartão de crédito.

1. Página de solicitação de cartão de crédito: `<host>/`
2. Página de login para a área administrativa: `<host>/login`
3. Dashboard com todas as solicitações realizadas, apenas solicitações aceitas ou apenas solicitações recusadas: `<host>/dashboard`

## Executar o projeto

Eu tentei instalar com npm, mas ele deu erro no build, assim recomendo instalar as dependências com yarn.

1. Intalar as dependências

```
yarn install
```

2. Executar como desenvolvedor

```
yarn run serve
```

3. Gerar os arquivos para o projeto em produção

```
yarn run build
```

4. Executar os testes unitários

```
yarn run test:unit
```
