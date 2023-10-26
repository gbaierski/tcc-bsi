<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
    <main>
        <img src="../assets/img/logo_ifc.png" alt="Hello" class="image">

        <h2>O que é este teste?</h2>
        <p>
            O objetivo do teste é obter medidas de desempenho reais de usuários em 2 protótipos de sistema de delivery para análise posterior.<br>
            Além das medidas de desempenho, a opinião do usuário também será analisada, verificando a preferência com base na faixa etária.
        </p>

        <img src="../assets/img/storyset/testing.png" alt="Pessoa prototipando tela" class="image">

        <h2>Para que poderá servir esse trabalho?</h2>
        <p>
            O trabalho poderá contribuir para estudos relacionados à UX (User Experience) e UI (User Interface).<br>
            O estudo feito também poderá servir como material de apoio para pesquisas e testes futuros na área de tecnologia, visando aprimorar as interfaces de sistemas web e a interação humano-computador.
        </p>

        <img src="../assets/img/storyset/ui-ux.png" alt="Pessoa prototipando tela" class="image">

        <h2>Por que esse tema foi escolhido?</h2>
        <p>
            Vivemos em uma época em que há muitas pessoas com idades e conhecimentos diferentes acessando a internet, com isso, observei a dificuldade que pessoas próximas em utilizar sistemas web, principalmente pessoas com um contato mais tardio à tecnologia e tive essa ideia.
        </p>

        <img src="../assets/img/storyset/talking-phone.png" alt="Pessoa prototipando tela" class="image">
        
        <h2>Como foram divididas as faixas etárias?</h2>
        <p>
            A ideia foi utilizar como base o ano em que os celulares chegaram no Brasil, ou seja, 1990. A relação das faixas etárias é a seguinte:
        </p>

        <ul>
            <li><b>18 anos ou menos: </b> Celular já é acessível 15 anos atrás ou mais.</li>
            <li><b>19 anos - 33 anos: </b> Celular já é acessível 14 anos atrás (19 anos) - Nasceu no ano que o celular chegou no Brasil (33 anos)</li>
            <li><b>34 anos - 54 anos: </b> Primeiro contato possível com 1 ano de idade (34 anos) - Primeiro contato possível com 21 anos de idade (54 anos)</li>
            <li><b>55 anos ou mais: </b> Primeiro contato possível com 22 anos de idade ou mais</li>
        </ul>

        <h2>Quais foram as medidas de desempenho utilizadas?</h2>
        <p>
           O desempenho do usuário em cada layout é medido da seguinte forma:
        </p>
        <ul>
            <li><b>finishAttempts: </b> Quantidade de vezes que o usuário tentou finalizar o teste.</li>
            <li><b>processingTime: </b> Tempo que o usuário levou observando detalhes do item (modal para quando selecionou o item desejado)</li>
            <li><b>stepCount: </b> Quantidade de passos até finalizar o objetivo solicitado, ou seja, cada item adicionado ao carrinho (perfeito = 3 passos)</li>
            <li><b>totalTime: </b> Tempo total que o usuário levou para finalizar o pedido</li>
        </ul>

        <h2>A opinião dos usuários importa?</h2>
        <p>
           É a parte mais valiosa! Jakob Nielsen, uma referência na área de UX / UI enfatiza a importância da opinião do usuário ao afirmar que "Os usuários são os especialistas em suas próprias necessidades".
        </p>

        <img src="../assets/img/storyset/feedback.png" alt="Pessoa prototipando tela" class="image">

        <h2>Informações técnicas sobre o teste:</h2>
        <img src="../assets/img/storyset/coding.png" alt="Pessoa prototipando tela" class="image">
        <ul>
            <li><b>Tecnologias utilizadas:</b> VueJS, Javascript, HTML, SCSS, CSS.</li>
            <li><b>Ferramentas externas utilizadas:</b><br>
                <a href="https://unsplash.com/">Unsplash (Imagens free)</a>,<br>
                <a href="https://convertio.co/">Convert IO (Conversão de arquivos)</a>,<br>
                <a href="https://www.upscale.media/upload">Upscale Media (Upscale de imagens)</a>,<br>
                <a href="https://storyset.com/">Storyset (Ilustrações)</a>,<br>
                <a href="https://fontawesome.com/search?o=r&m=free">FontAwesome Icons (Ícones)</a>,<br>
                <a href="https://firebase.google.com/">Google Firebase (Armazenamento)</a><br>
                <a href="https://vercel.com/">Vercel (Hospedagem)</a><br>
            </li>
            <li><b>Repositório no Github: </b><a href="https://github.com/gbaierski/tcc-bsi">gbaierski/tcc-bsi</a></li>
        </ul>

        <footer>
            <div><b>Desenvolvido por Gustavo José Baierski</b></div>
            <div>Instituto Federal Catarinense - Campus Araquari</div>
            <div>2023</div>
        </footer>
    </main>
</template>

<style lang="scss" scoped>
    @import "../assets/css/colors.scss";
    @import "../assets/css/main.scss";

    main {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: "Source Sans Pro", sans-serif;
    }

    h2 {
        width: 90%;
        font-size: 22.5px;
    }

    p {
        width: 90%;
        text-indent: 30px;
        font-size: 16px;
    }

    ul {
        width: calc(90% - 40px);
        justify-self: flex-start;
        padding: 0px;
    }

    li:not(:last-child) { 
        margin-bottom: 15px;  
    }

    a, a:visited {
        color: rgb(23, 172, 135);
    }

    footer {
        width: calc(100% - 40px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: $contrast;
        color: $dark;
        font-size: 0.9rem;
        margin-top: 50px;
        padding: 20px;
    }

    .image {
        width: 18rem;
    }
</style>