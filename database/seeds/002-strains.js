exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      name: "Choco",
      type: "Indica",
      description: "delicious",
      taste: "chocolate",
      effects: "happiness",
      rating: "5",
    },
    {
      id: 2,
      name: "Straw",
      type: "Sativa",
      description: "sweet",
      taste: "strawberry",
      effects: "euphoria",
      rating: "4",
    },
    {
      id: 3,
      name: "Banana OG",
      type: "Hybrid",
      description: "yummy",
      taste: "banana",
      effects: "joy",
      rating: "3",
    },
    {
      id: 4,
      name: "Blue Dream",
      type: "Sativa",
      description: "calming",
      taste: "blueberry",
      effects: "relaxing",
      rating: "5",
    },
    {
      id: 5,
      name: "Double Dream",
      type: "Indica",
      description: "you will be able to sleep very well!",
      taste: "dreamy",
      effects: "super relaxing",
      rating: "4",
    },
  ]);
};
