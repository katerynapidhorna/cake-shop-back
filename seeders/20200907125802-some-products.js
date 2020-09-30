"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "starry night",
          price: 2.5,
          imgUrl:
            "https://images.unsplash.com/photo-1595586448332-3e7f31a2e178?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "colorful",
          price: 2.5,
          imgUrl:
            "https://images.unsplash.com/photo-1581606697330-d18751127a89?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "watermelon",
          price: 2.5,
          imgUrl:
            "https://images.unsplash.com/photo-1595450648353-d16bb38772c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pastel cupcake",
          price: 2,
          imgUrl:
            "https://images.unsplash.com/photo-1598401309051-ef68b961c086?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "simple cupcake",
          price: 1.5,
          imgUrl:
            "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chocolate one",
          price: 3,
          imgUrl:
            "https://images.unsplash.com/photo-1599785209654-94b4160949e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
          ingredients: "eggs, milk, Choco-powder",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chocolate cupcake",
          price: 3,
          imgUrl:
            "https://images.unsplash.com/photo-1582760998456-d239b01c4392?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, milk, Choco-powder",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "grassy cupcake",
          price: 2,
          imgUrl:
            "https://images.unsplash.com/photo-1596151226641-3bf476a05146?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, vanilla, Choco-powder",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "light fluffyness",
          price: 2,
          imgUrl:
            "https://images.unsplash.com/photo-1581363493760-96acaf590cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, vanilla, Choco-powder",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pink tenderness",
          price: 2.5,
          imgUrl:
            "https://images.unsplash.com/photo-1543287920-26349b5b1376?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, vanilla, Orio",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "set of mokka cupcakes",
          price: 15,
          imgUrl:
            "https://images.unsplash.com/photo-1582760998343-042b34030a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "surprize inside",
          price: 3,
          imgUrl:
            "https://images.unsplash.com/photo-1587668178538-c07606344e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          ingredients: "eggs, vanilla, Orio",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
