import { NextApiRequest } from "next";
import knex from "../../../clients/knex";

export default async (req: NextApiRequest, res) => {
  if (req.method === "PUT") {
    const { id } = req.query;
    const { name, color_one, color_two, color_three, color_four, color_five } =
      req.body.body;

    await knex("palettes").where("id", id).update({
      name: name,
      color_one: color_one,
      color_two: color_two,
      color_three: color_three,
      color_four: color_four,
      color_five: color_five,
    });

    const palettes = await knex("palettes");

    res.status(200).json(palettes);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    const palettes = await knex("palettes").where("id", id).delete();
    res.status(200).json(palettes);
  } else {
    res.status(404).json({ error: `${req.method} endpoint does not exist` });
  }
};
