# Teste de Desempenho e Preferência de Sistema de Delivery

## Descrição do Projeto

O objetivo deste projeto é obter medidas reais de desempenho dos usuários em dois protótipos de sistemas de delivery, com o intuito de realizar análises posteriores. Além de medidas de desempenho, a preferência dos usuários será analisada com base em sua faixa etária.

## Objetivo

Este trabalho tem como finalidade contribuir para estudos relacionados à UX (User Experience) e UI (User Interface). As análises realizadas neste estudo servirão como material de apoio para pesquisas e testes futuros na área de tecnologia, visando aprimorar as interfaces de sistemas web e a interação humano-computador.

## Motivação

A escolha desse tema se baseia no cenário atual em que diversas pessoas com idades e níveis de conhecimento variados acessam a internet. Foi observada a dificuldade enfrentada por muitas pessoas, especialmente aquelas com menos familiaridade com a tecnologia, ao utilizar sistemas web.

## Medidas de Desempenho Utilizadas

O desempenho do usuário em cada layout é medido com base em quatro métricas principais:

1. **finishAttempts:** Quantidade de vezes que o usuário tentou finalizar o teste.
2. **processingTime:** Tempo que o usuário levou para observar detalhes do item (tempo gasto em um modal ao selecionar o item desejado).
3. **stepCount:** Quantidade de passos necessários para finalizar o objetivo solicitado, ou seja, cada item adicionado ao carrinho (o ideal é 3 passos para a perfeição).
4. **totalTime:** Tempo total que o usuário levou para finalizar o pedido.

Além disso, no final do teste são coletados dados com base na opinião do usuário (verificar tela quiz).

## Instalação do Projeto

Para configurar o projeto em sua máquina, siga as instruções abaixo:

### 1. Clonar o repositório

```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Instalar as dependências

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, execute:

```sh
npm install
```

### 3. Compilar e Iniciar o Servidor de Desenvolvimento

Para compilar o projeto e iniciar um servidor de desenvolvimento com hot-reload, execute o seguinte comando:

```sh
npm run dev
```

Isso fará com que o projeto esteja disponível localmente para testes e desenvolvimento.

Agora você está pronto para começar a utilizar o sistema de delivery e coletar medidas de desempenho e preferência do usuário.