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
            "https://dfuukapb8h94d.cloudfront.net/wp-content/uploads/2016/12/02014759/galaxy-cupcakes_landscapeThumbnail_en-US.jpeg.jpg",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "colorful",
          price: 2.5,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCDUzkcG5BhCs5ONUquXtKdYAUy58XzyzjMw&usqp=CAU",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "watermelon",
          price: 2.5,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT-X1MLZkIgIW_ITPHWhreS3SRD5C_tvr1Fw&usqp=CAU",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pastel cupcake",
          price: 2,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUIfYBnzGMOZs3AUOZ0CkTrK40y8KrwcZapA&usqp=CAU",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "simple cupcake",
          price: 1.5,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-GCdQaXp2j0v_c6GL6CQx_D54lXxICqCrZQ&usqp=CAU",
          ingredients: "eggs, flour, milk",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chocolate one",
          price: 3,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfs8eCpPah6M0AX7Ea6e5rXmDYjgHq4aOOyg&usqp=CAU",
          ingredients: "eggs, milk, Choco-powder",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chocolate cupcake",
          price: 3,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0MYSShOD57vOW3zyRent9MLo4T2EEpeWOeA&usqp=CAU",
          ingredients: "eggs, milk, Choco-powder",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "grassy cupcake",
          price: 2,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR145vexhFluNNn1wf1YSsOPJkkhPxtgxOcLw&usqp=CAU",
          ingredients: "eggs, vanilla, Choco-powder",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "light fluffyness",
          price: 2,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmhHet1mwjMRwRlFlC1DGZ8ZnCerYrTa-APg&usqp=CAU",
          ingredients: "eggs, vanilla, Choco-powder",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pink tenderness",
          price: 2.5,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzfUi1s8hvtS-1BydXsAos1LRCYSbXpyUSjA&usqp=CAU",
          ingredients: "eggs, vanilla, Orio",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "set of mokka cupcakes",
          price: 15,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkA1stwhoSmmqMt_WHTMQFxSut_fBltRSP_Q&usqp=CAU",
          category: "cupcake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "surprize inside",
          price: 3,
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-dpSiK7nJStZYRDsqL-Z1WItuwUI87GGNsA&usqp=CAU",
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