const path = require("path");

module.exports = ({ env }) => {
  const client = "sqlite";

  const connections = {
    mysql: {
      connection: {
        host: "localhost",
        port: 3306,
        database: "strapi",
        user: "strapi",
        password: "strapi",
        ssl: false,
      },
      pool: { min: 2, max: 10 },
    },
    postgres: {
      connection: {
        host: "localhost",
        port: 5432,
        database: "strapi",
        user: "strapi",
        password: "strapi",
        ssl: false,
        schema: "public",
      },
      pool: { min: 2, max: 10 },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, "..", "..", ".tmp/data.db"),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000,
    },
  };
};
