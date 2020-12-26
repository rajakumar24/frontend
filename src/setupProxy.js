const proxy = require("https-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/api/user/*", { target: "https://13.234.201.64:3001/" }));
  app.use(
    proxy("/api/user/property/*", { target: "https://13.234.201.64:3001/" })
  );
  app.use(proxy("/api/profile/*", { target: "https://13.234.201.64:3001/" }));
  app.use(
    proxy("/api/user/propertyCount", { target: "https://13.234.201.64:3001/" })
  );
  app.use(proxy("/api/profile/*", { target: "https://13.234.201.64:3001/" }));
  app.use(
    proxy("/api/profile/user/current", {
      target: "https://13.234.201.64:3001/",
    })
  );

  app.use(
    proxy("/api/profile/user/*", { target: "https://13.234.201.64:3001/" })
  );
  app.use(
    proxy("/api/profile/user/property/*", {
      target: "https://13.234.201.64:3001/",
    })
  );
  app.use(
    proxy("/api/profile/user/property/count", {
      target: "https://13.234.201.64:3001/",
    })
  );
  app.use(
    proxy("/api/property/all", { target: "https://13.234.201.64:3001/" })
  );
  app.use(proxy("/api/property/", { target: "https://13.234.201.64:3001/" }));
  app.use(
    proxy("/api/property/add", { target: "https://13.234.201.64:3001/" })
  );
  app.use(
    proxy("/api/property/update/", { target: "https://13.234.201.64:3001/" })
  );
  app.use(
    proxy("/api/property/delete/*", { target: "https://13.234.201.64:3001/" })
  );
};
