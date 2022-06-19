class LibraryController {

  // [GET] /library
  renderLib(req, res) {
    res.render("library");
  }
}

module.exports = new LibraryController();
