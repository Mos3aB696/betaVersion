import xss from 'xss';

const sanitizeInput = (req, res, next) => {
  Object.keys(req.body).forEach((key) => {
    if (typeof req.body[key] === 'string') {
      req.body[key] = xss(req.body[key]);
    }
  });
  next();
};
export default sanitizeInput;
