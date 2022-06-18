class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:id
  show(req, res) {
    res.send("new detail")
  }
}

// Khởi tạo đối tượng
module.exports = new NewsController;
