import { Client } from "faunadb";

export const fauna = new Client({
  /*@ts-ignore */
  secret: process.env.FAUNADB_KEY,
});
