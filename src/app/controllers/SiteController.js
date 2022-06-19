const Course = require('../models/Course');

class SiteController {
  // [GET] /
  index(req, res) {
    Course.find({}, (err, courses) => {
      if (!err) res.json(courses);
      else res.status(400).json({ error: err });
    });
    //res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

// Khởi tạo đối tượng
module.exports = new SiteController();
