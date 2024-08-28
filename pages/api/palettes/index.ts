import knex from "../../../clients/knex";

export default async (req, res) => {
  if (req.method === "GET") {
    const palettes = await knex("palettes");

    res.status(200).json(palettes);
  } else if (req.method === "POST") {
    const { name, color_one, color_two, color_three, color_four, color_five } =
      req.body.body;

    const doesNameExists = await knex("palettes").where("name", name);

    if (doesNameExists.length > 0) {
      const palettes = await knex("palettes");
      res.status(500).json(palettes).error("Name already exists!");
      return;
    }

    await knex("palettes").insert({
      name: name,
      color_one: color_one,
      color_two: color_two,
      color_three: color_three,
      color_four: color_four,
      color_five: color_five,
    });

    const palettes = await knex("palettes");

    res.status(200).json(palettes);
  } else {
    res.status(404).json({ error: `${req.method} endpoint does not exist` });
  }
};
