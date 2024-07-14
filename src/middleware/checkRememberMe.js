module.exports = (req, res, next) => {
  const { rememberMe } = req.body;
  req.tokenExpiry = rememberMe ? "7d" : "1h"; // 7 hari jika 'Remember Me' dipilih, 1 jam jika tidak
  next();
};
