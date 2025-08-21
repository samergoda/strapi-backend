export default ({ env }) => ({
  auth: {
    secret: "M2RSI0zJfFm3fO1V+QDBsg==",
  },
  apiToken: {
    salt: "sthdTIx6ifIy1RCfDLfKtg==",
  },
  transfer: {
    token: {
      salt: "9uDZCmImHbBaXBvyB0l06w==",
    },
  },
  secrets: {
    encryptionKey: "jnw18BgKGI7UHMy3YKvyCA==",
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
