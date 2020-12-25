const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/api/user/*", { target: "http://13.234.201.64:3001/" }));
  app.use(
    proxy("/api/user/property/*", { target: "http://13.234.201.64:3001/" })
  );
  app.use(proxy("/api/profile/*", { target: "http://13.234.201.64:3001/" }));
  app.use(
    proxy("/api/user/propertyCount", { target: "http://13.234.201.64:3001/" })
  );
  app.use(proxy("/api/profile/*", { target: "http://13.234.201.64:3001/" }));
  app.use(
    proxy("/api/profile/user/current", { target: "http://13.234.201.64:3001/" })
  );

  app.use(
    proxy("/api/profile/user/*", { target: "http://13.234.201.64:3001/" })
  );
  app.use(
    proxy("/api/profile/user/property/*", {
      target: "http://13.234.201.64:3001/",
    })
  );
  app.use(
    proxy("/api/profile/user/property/count", {
      target: "http://13.234.201.64:3001/",
    })
  );
  app.use(proxy("/api/property/all", { target: "http://13.234.201.64:3001/" }));
  app.use(proxy("/api/property/", { target: "http://13.234.201.64:3001/" }));
  app.use(proxy("/api/property/add", { target: "http://13.234.201.64:3001/" }));
  app.use(
    proxy("/api/property/update/", { target: "http://13.234.201.64:3001/" })
  );
  app.use(
    proxy("/api/property/delete/*", { target: "http://13.234.201.64:3001/" })
  );
};
