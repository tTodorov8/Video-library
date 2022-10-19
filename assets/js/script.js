import { Table } from "./table.js";
fetch(
  "https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json"
)
  .then((response) => response.json())
  .then((json) => {
    new Table(json, "movies-container");
  });
