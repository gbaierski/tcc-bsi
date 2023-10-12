const menu = {
    hamburgers: [
        {
            id: 1,
            name: "Salada",
            description: "Pão cervejinha, 1x hambúrguer de 180g de costela, 1,5x queijo mussarela, maionese, molho especial, alface, tomate, cebola roxa e picles. Acompanha ketchup e molho especial separadamente.",
            price: 22,
            image: "salada.webp",
            ingredients: {
                bread: "Pão cervejinha",
                burger: "1x hambúrguer de 180g de costela",
                cheese: "1,5x queijo mussarela",
                sauce: "Maionese, molho especial, acompanha ketchup e molho especial separadamente",
                salad: "Alface, tomate, cebola roxa e picles",
            }
        },
        {
            id: 2,
            name: "Duplo cheddar",
            description: "Pão brioche, 2x hambúrguer de 180g de costela, 3 camadas de queijo cheddar, maionese, bacon picadinho. Acompanha ketchup separadamente.",
            price: 32,
            image: "duploCheddar.webp",
            ingredients: {
                bread: "Pão brioche",
                burger: "2x hambúrguer de 180g de costela",
                cheese: "3 camadas de queijo cheddar",
                bacon: "Bacon picadinho",
                sauce: "Maionese, acompanha ketchup separadamente",
            }
        },
        {
            id: 3,
            name: "Simples",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, 1x queijo mussarela, maionese, molho especial, alface e tomate.",
            price: 18,
            image: "simples.webp",
            ingredients: {
                bread: "Pão brioche",
                burger: "1x hambúrguer de 150g de costela",
                cheese: "1x queijo mussarela",
                sauce: "Maionese, molho especial",
                salad: "Alface e tomate",
            }
        },
        {
            id: 4,
            name: "Duplo acebolado",
            description: "Pão cervejinha, 2x hambúrguer de 150g de costela, 2x queijo cheddar, molho especial, cebola e picles.",
            price: 32,
            image: "onion.webp",
            ingredients: {
                bread: "Pão cervejinha",
                burger: "2x hambúrguer de 150g de costela",
                cheese: "2x queijo cheddar",
                sauce: "Molho especial",
                salad: "Cebola e picles",
            }
        },
        {
            id: 5,
            name: "Duplo burger",
            description: "Pão brioche, 2x hambúrguer de 150g de costela, 3x queijo mussarela, maionese, molho especial, tomate, cebola e picles.",
            price: 32,
            image: "duploBurger.webp",
            ingredients: {
                bread: "Pão brioche",
                burger: "2x hambúrguer de 150g de costela",
                cheese: "3x queijo mussarela",
                sauce: "Maionese, molho especial",
                salad: "Tomate, cebola e picles",
            }
        },
        {
            id: 6,
            name: "Picante",
            description: "Pão brioche, 1x hambúrguer de 180g de costela, 1x queijo mussarela, maionese, molho especial, alface, bacon em tiras e molho picante.",
            price: 25,
            image: "picante.webp",
            ingredients: {
                bread: "Pão brioche",
                burger: "1x hambúrguer de 180g de costela",
                cheese: "1x queijo mussarela",
                bacon: "Bacon em tiras",
                sauce: "Maionese, molho especial e molho picante",
                salad: "Alface",
            }
        }
    ],
    hotdogs: [
        {
            id: 7,
            name: "Dog Simples",
            description: "Pão 25cm, salsicha, maionese, ketchup e mostarda. Acompanha ketchup e maionese separadamente.",
            price: 20,
            image: "dogsimples.webp",
            ingredients: {
                bread: "Pão 25cm",
                sausage: "Salsicha",
                sauce: "Maionese, ketchup, mostarda, acompanha ketchup e maionese separadamente",
            }
        },
        {
            id: 8,
            name: "Dog Cheddar Bacon",
            description: "Pão 25cm, salsicha, maionese, ketchup, cheddar derretido e bacon picadinho. Acompanha ketchup e maionese separadamente.",
            price: 26,
            image: "dogCheddar.webp",
            ingredients: {
                bread: "Pão 25cm",
                sausage: "Salsicha",
                cheese: "Cheddar derretido",
                bacon: "Bacon picadinho",
                sauce: "Maionese, ketchup, acompanha ketchup e maionese separadamente",
            }
        }
    ],
    servings: [
        {
            id: 9,
            name: "Fritas Simples",
            description: "400g de batata frita, muito cheddar, 100g de bacon.",
            price: 25,
            image: "fritasSimples.webp",
            ingredients: {
                weight: "400g de batata frita",
                cheese: "Muito cheddar",
                bacon: "100g de bacon",
            }
        },
        {
            id: 10,
            name: "Chicken Nuggets",
            description: "500g de nuggets de frango. Acompanha ketchup e a maionese especial.",
            price: 30,
            image: "nuggets.webp",
            ingredients: {
                weight: "500g de nuggets de frango",
                sauce: "Acompanha ketchup e a maionese especial",
            }
        }
    ],
    juices: [
        {
            id: 11,
            name: "Suco de laranja",
            description: "600ml de suco de laranja natural.",
            price: 10,
            image: "sucoLaranja.webp",
            ingredients: {
                juice: "600ml de suco de laranja natural",
            }
        },
        {
            id: 12,
            name: "Suco de uva",
            description: "600ml de suco de uva natural.",
            price: 10,
            image: "sucoUva.webp",
            ingredients: {
                juice: "600ml de suco de uva natural",
            }
        },
        {
            id: 13,
            name: "Suco de abacaxi com hortelã",
            description: "600ml de suco de abacaxi com hortelã.",
            price: 10,
            image: "sucoAbacaxi.webp",
            ingredients: {
                juice: "600ml de suco de abacaxi com hortelã",
            }
        },
        {
            id: 14,
            name: "Limonada",
            description: "400ml de limonada.",
            price: 10,
            image: "sucoLimonada.webp",
            ingredients: {
                juice: "400ml de limonada",
            }
        }
    ],
    otherDrinks: [
        {
            id: 15,
            name: "Refrigerante",
            description: "Refrigerante 2L.",
            price: 14,
            image: "refrigerante.webp",
            ingredients: {
                drink: "Refrigerante 2L",
            }
        },
        {
            id: 16,
            name: "Água sem gás",
            description: "700ml de água sem gás.",
            price: 4,
            image: "agua.webp",
            ingredients: {
                drink: "700ml de água sem gás",
            }
        },
        {
            id: 17,
            name: "Caipirinha de vinho",
            description: "400ml de caipirinha de vinho.",
            price: 14,
            image: "caipirinhaVinho.webp",
            ingredients: {
                drink: "400ml de caipirinha de vinho",
            }
        }
    ],
    desserts: [
        {
            id: 18,
            name: "Casquinha",
            description: "Casquinha de sorvete de baunilha com cobertura de chocolate.",
            price: 7,
            image: "casquinha.webp",
            ingredients: {
                dessert: "Casquinha de sorvete de baunilha com cobertura de chocolate",
            }
        },
        {
            id: 19,
            name: "Sorvete",
            description: "Pote de 1L de sorvete de baunilha com cobertura de chocolate e pedaços de chocolate. Serve de 2 à 4 pessoas.",
            price: 18,
            image: "bersksMix.webp",
            ingredients: {
                dessert: "Pote de 1L de sorvete de baunilha com cobertura de chocolate e pedaços de chocolate. Serve de 2 à 4 pessoas",
            }
        }
    ]
}

export default menu;