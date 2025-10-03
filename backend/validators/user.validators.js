const { z } = require("zod");

const idParamSchema = z.object({
  id: z.preprocess((val) => {
    const n = Number(val);
    return Number.isNaN(n) ? val : n;
  }, z.number().int().positive("Invalid id")),
});


const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
});

module.exports = {
  idParamSchema,
  updateUserSchema,
};
