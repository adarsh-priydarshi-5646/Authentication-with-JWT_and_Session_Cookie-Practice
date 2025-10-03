module.exports = (schema, property = "body") => {
    return (req, res, next) => {
      try {
        const toValidate = req[property];
        const parsed = schema.parse(toValidate);
        // replace original with parsed (coercion applied)
        req[property] = parsed;
        next();
        
      } catch (err) {
        if (err && err.errors) {
          const issues = err.errors.map(e => ({ path: e.path.join('.'), message: e.message }));
          return res.status(400).json({ message: "Validation failed", issues });
        }
        next(err);
      }
    };
  };
  