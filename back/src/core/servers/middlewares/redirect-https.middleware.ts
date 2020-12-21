import { Request, RequestHandler } from 'express';
import { headerConstants } from 'core/constants';

const buildHttpsUrl = (req: Request) =>
  `${headerConstants.httpsProtocol}://${req.header(headerConstants.host)}${
    req.url
  }`;

export const redirectHttpsMiddleware: RequestHandler = (req, res, next) => {
  if (req.header(headerConstants.protocol) !== headerConstants.httpsProtocol) {
    res.redirect(buildHttpsUrl(req));
  } else {
    next();
  }
};
