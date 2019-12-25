import moment from 'moment';
class HomeController {
  static index(req, res) {
    return res.json({
      title: 'Handy Node',
      message: 'Build something amazing!',
      status: '200'
    });
  }
}
export default HomeController;
