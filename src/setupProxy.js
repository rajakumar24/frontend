const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api/user/*", { target: "http://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/user/property/*", {
      target: "http://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/profile/*", { target: "http://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/user/propertyCount", {
      target: "http://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/profile/*", { target: "http://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/profile/user/current", {
      target: "http://getrightproperty.com:3001/",
    })
  );

  app.use(
    proxy("/api/profile/user/*", {
      target: "http://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/profile/user/property/*", {
      target: "http://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/profile/user/property/count", {
      target: "http://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/property/all", { target: "http://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/property/", { target: "http://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/property/add", { target: "http://getrightproperty.com:3001/" })
  );
  app.use(
    proxy("/api/property/update/", {
      target: "http://getrightproperty.com:3001/",
    })
  );
  app.use(
    proxy("/api/property/delete/*", {
      target: "http://getrightproperty.com:3001/",
    })
  );
};
