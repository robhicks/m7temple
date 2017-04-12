import {user} from './user.js';

export default function auth(req, event, next) {
  req.users = user;
}
