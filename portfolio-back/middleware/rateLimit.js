const ipCache = new Map();

/**
 * Basic in-memory rate limiter to restrict users to 10 messages.
 */
const chatRateLimiter = (req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  if (!ipCache.has(ip)) {
    ipCache.set(ip, { count: 0, firstMsgTime: Date.now() });
  }

  const session = ipCache.get(ip);
  
  // Reset window after 1 hour (optional safety)
  if (Date.now() - session.firstMsgTime > 60 * 60 * 1000) {
    session.count = 0;
    session.firstMsgTime = Date.now();
  }

  if (session.count >= 10) {
    return res.status(429).json({
      message: 'Rate limit exceeded. You have reached the session limit of 10 messages.'
    });
  }

  session.count += 1;
  ipCache.set(ip, session);
  next();
};

module.exports = { chatRateLimiter };
