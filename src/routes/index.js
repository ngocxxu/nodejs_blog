const newsRouter = require("./news");
const siteRouter = require("./site");
const libraryRouter = require("./library");

function route(app) {
  app.use("/news", newsRouter);
  
  app.use("/library", libraryRouter);
  
  app.use("/", siteRouter);
}

module.exports = route;
