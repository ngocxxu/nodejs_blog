class SiteController {
  // [GET] /home
  index(req, res) {
    res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search")
  }
}

// Khởi tạo đối tượng
module.exports = new SiteController;
