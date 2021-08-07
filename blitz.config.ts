import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"
// uncomment the next line to reproduce the bug
// const withPWA = require("next-pwa")

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "cookie-min",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
}

module.exports = config
/*module.exports = withPWA({
  ...config,
  pwa: {
    dest: "public",
  },
})*/
