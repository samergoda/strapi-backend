export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: ["932910814c6d06bdb75780bfba9138b4", "40573a1188cd02d3aa82902a3c7c5ae8"],
  },
});
