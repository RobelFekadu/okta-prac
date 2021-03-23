const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: process.env.OKTA_ISSUER,
  clientId: process.env.OKTA_CLIENTID,
});

async function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || "";

  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).send("Unauthorized");
  }

  const accessToken = match[1];

  try {
    const jwt = await oktaJwtVerifier.verifyAccessToken(
      accessToken,
      process.env.OKTA_AUDIENCE
    );
    req.jwt = jwt;
    next();
  } catch (error) {
    res.status(401).send(err.message);
  }
}

module.exports = authenticationRequired;
