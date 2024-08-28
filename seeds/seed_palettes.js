/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("colors").del();
  await knex("palettes").del();

  // Insert entries
  // await knex("colors").insert([
  //   { id: 1, red: "23", blue: "45", green: "66" },
  //   { id: 2, red: "66", blue: "45", green: "23" },
  //   { id: 3, red: "123", blue: "88", green: "233" },
  //   { id: 4, red: "241", blue: "163", green: "198" },
  //   { id: 5, red: "12", blue: "120", green: "210" },
  // ]);

  await knex("palettes").insert([
    {
      id: 1,
      name: "summer",
      color_one: "23-45-66",
      color_two: "66-45-23",
      color_three: "123-88-233",
      color_four: "241-163-198",
      color_five: "12-120-210",
    },
    {
      id: 2,
      name: "new jersey",
      color_one: "28-99-123",
      color_two: "40-200-170",
      color_three: "120-12-212",
      color_four: "88-254-154",
      color_five: "34-99-199",
    },
  ]);
};
