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
git clone https://github.com/gbaierski/tcc-bsi.git
cd tcc-bsi
```

### 2. Instalar as dependências

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, execute:

```sh
npm install
```

### 3. Configuração do Firebase

Antes de prosseguir, é necessário configurar o Firebase para que o sistema de delivery funcione corretamente. Siga as etapas abaixo:

#### 3.1. Copiar o arquivo `.env-example`

No diretório raiz do projeto, você encontrará um arquivo chamado `.env-example`. Copie este arquivo e renomeie a cópia para `.env`.

#### 3.2. Configurar as Variáveis de Ambiente

Abra o arquivo `.env` em um editor de texto de sua escolha e preencha as variáveis de ambiente necessárias com as informações da sua conta Firebase. As variáveis que você deve configurar incluem:

- `VITE_APP_FIREBASE_API_KEY=seu_api_key`
- `VITE_APP_FIREBASE_AUTH_DOMAIN=seu_auth_domain`
- `VITE_APP_FIREBASE_DATABASE_URL=seu_database_url`
- `VITE_APP_FIREBASE_PROJECT_ID=seu_project_id`
- `VITE_APP_FIREBASE_STORAGE_BUCKET=seu_storage_bucket`
- `VITE_APP_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id`
- `VITE_APP_FIREBASE_APP_ID=seu_app_id`
- `VITE_APP_FIREBASE_MEASUREMENT_ID=seu_measurement_id`

Você pode encontrar essas informações na seção de configurações do seu projeto Firebase.

Depois de preencher corretamente as variáveis de ambiente, o sistema de delivery estará configurado para se conectar à sua conta Firebase.

Lembre-se de não compartilhar o arquivo `.env` publicamente, pois ele contém informações sensíveis. Certifique-se de mantê-lo seguro e protegido.

### 4. Compilar e Iniciar o Servidor de Desenvolvimento

Para compilar o projeto e iniciar um servidor de desenvolvimento com hot-reload, execute o seguinte comando:

```sh
npm run dev
```

Isso fará com que o projeto esteja disponível localmente para testes e desenvolvimento.

Agora você está pronto para começar a utilizar o sistema de delivery e coletar medidas de desempenho e preferência do usuário.