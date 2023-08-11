const menu = {
    hamburgers: [
        {
            id: 1,
            name: "Salada",
            description: "Pão cervejinha, 1x hambúrguer de 180g de costela, 1,5x queijo mussarela, maionese, molho especial, alface, tomate, cebola roxa e picles. Acompanha ketchup e molho especial separadamente.",
            price: 20,
            image: "salada.webp"
        },
        {
            id: 2,
            name: "Duplo Cheddar",
            description: "Pão brioche, 2x hambúrguer de 180g de costela, 3 camadas de queijo cheddar, maionese, bacon picadinho. Acompanha ketchup separadamente.",
            price: 32,
            image: "duploCheddar.webp"
        },
        {
            id: 3,
            name: "Simples",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, 1x queijo mussarela, maionese, molho especial, alface e tomate.",
            price: 15,
            image: "simples.webp"
        },
        {
            id: 4,
            name: "Bersk's Burger",
            description: "Pão brioche, 2x hambúrgueres de 180g de costela, 3 camadas de queijo mussarela, barbecue, maionese, molho especial, alface americana, tomate, cebola picadinha e picles. Acompanha ketchup, barbecue, molho especial e uma porção de batata com cheddar e bacon separadamente.",
            price: 70,
            image: "bersk.webp"
        },
        {
            id: 5,
            name: "Intense Burger",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, queijo gorgonzola, cebola roxa crispy, 2x tiras de bacon, molho especial. Acompanha molho especial separadamente.",
            price: 29,
            image: "intense.webp"
        },
        {
            id: 6,
            name: "Flipicante",
            description: "Pão australiano, 1x hambúrguer de 200g de linguiça blumenau, queijo gorgonzola e queijo coalho, geléia de pimenta, molho especial, alface e cebola roxa chapeada. Acompanha ketchup, barbecue e molho especial separadamente.",
            price: 41,
            image: "flipicante.webp"
        },
        {
            id: 7,
            name: "Queso Caliente",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, queijo empanado, geléia de pimenta, rúcula e tomate. Acompanha molho especial separadamente.",
            price: 49,
            image: "queso.webp"
        }
    ],
    hotdogs: [
        {
            id: 8,
            name: "Dog Simples",
            description: "Pão 25cm, salsicha, maionese, ketchup e mostarda. Acompanha ketchup e maionese separadamente.",
            price: 20,
            image: "dogsimples.webp"
        },
        {
            id: 9,
            name: "Dog Cheddar Bacon",
            description: "Pão 25cm, salsicha, maionese, ketchup, cheddar derretido e bacon picadinho. Acompanha ketchup e maionese separadamente.",
            price: 26,
            image: "dogCheddar.webp"
        },
        {
            id: 10,
            name: "Chickão",
            description: "Pão 35cm, 4x salsichas, maionese, ketchup, milho, bacon picadinho, frango desfiado, calabresa e molho verde. Acompanha ketchup e maionese separadamente.",
            price: 40,
            image: "chickao.webp"
        }
    ],
    servings: [
        {
            id: 11,
            name: "Fritas Simples",
            description: "400g de batata frita, muito cheddar, 100g de bacon.",
            price: 25,
            image: "fritasSimples.webp"
        },
        {
            id: 12,
            name: "O Comilão",
            description: "1 kg de batata frita, muito cheddar, 500g de coração de galinha, 500g de frango chapeado, 350g bacon em tiras, 500g de linguiça calabresa, 500g de picanha fatiada. Acompanha salada. Acompanha ketchup e maionese separadamente.",
            price: 220,
            image: "oComilao.webp"
        },
        {
            id: 13,
            name: "Chicken Nuggets",
            description: "500g de nuggets de frango. Acompanha Ketchup e a maionese especial.",
            price: 30,
            image: "nuggets.webp"
        }
    ],
    juices: [
        {
            id: 14,
            name: "Laranja",
            description: "600ml de suco de laranja natural.",
            price: 10,
            image: "sucoLaranja.webp"
        },
        {
            id: 15,
            name: "Uva",
            description: "600ml de suco de uva natural.",
            price: 10,
            image: "sucoUva.webp"
        },
        {
            id: 16,
            name: "Abacaxi com Hortelã",
            description: "600ml de suco de abacaxi com hortelã.",
            price: 10,
            image: "sucoAbacaxi.webp"
        },
        {
            id: 17,
            name: "Limonada",
            description: "400ml de limonada.",
            price: 10,
            image: "sucoLimonada.webp"
        }
    ],
    otherDrinks: [
        {
            id: 18,
            name: "Refrigerante",
            description: "Refrigerante 2L.",
            price: 14,
            image: "refrigerante.webp"
        },
        {
            id: 19,
            name: "Água sem gás",
            description: "700ml de água com ou sem gás.",
            price: 4,
            image: "agua.webp"
        },
        {
            id: 20,
            name: "Caipirinha de vinho",
            description: "400ml de caipirinha de vinho.",
            price: 14,
            image: "caipirinhaVinho.webp"
        }
    ],
    desserts: [
        {
            id: 21,
            name: "Coração Mole",
            description: "Bolo de chocolate utilizando leite condensado, cacau em pó e granulado. Serve 2 pessoas.",
            price: 30,
            image: "coracaoMole.webp"
        },
        {
            id: 22,
            name: "Casquinha",
            description: "Casquinha de sorvete de baunilha com cobertura de chocolate.",
            price: 7,
            image: "casquinha.webp"
        },
        {
            id: 23,
            name: "Bersk's Mix",
            description: "Pote de 1L de sorvete de baunilha com cobertura de chocolate e pedaços de chocolate. Serve de 2 à 4 pessoas.",
            price: 18,
            image: "bersksMix.webp"
        }
    ]
}

export default menu;