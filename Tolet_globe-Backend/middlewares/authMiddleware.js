const Joi = require("joi");

const validateContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.alternatives()
    .try(Joi.string().allow("", null), Joi.number())
    .optional(),
  topic: Joi.string()
    .valid("Inquiry", "Report Bug", "Support", "Feedback", "Other")
    .required(),
  message: Joi.string().max(500).required(),
});

module.exports = validateContact;
