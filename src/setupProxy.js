const proxy = require("https-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api/user/*", { target: "https://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/user/property/*", {
      target: "https://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/profile/*", { target: "https://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/user/propertyCount", {
      target: "https://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/profile/*", { target: "https://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/profile/user/current", {
      target: "https://getrightproperty.com:3001/",
    })
  );

  app.use(
    proxy("/api/profile/user/*", {
      target: "https://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/profile/user/property/*", {
      target: "https://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/profile/user/property/count", {
      target: "https://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/property/all", { target: "https://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/property/", { target: "https://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/property/add", { target: "https://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/property/update/", {
      target: "https://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/property/delete/*", {
      target: "https://getrightproperty.com:3001/",
    })
  );
};
