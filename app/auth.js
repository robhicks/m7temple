import {user} from './user.js';

export default function auth(req, event, next) {
  user.getUser()
    .then((_user) => {
      req.user = _user;
      return next();
    })
    .catch((err) => console.log("err", err))
}
