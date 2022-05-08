import joi from "joi"

class validation  {

    static signinValidation(user) {
      const schema = {
          firstname: joi.string().min(),
          email: joi.string().email().required(),
          password: joi.string().min(8).required()
      }

      return joi.validate(user, schema, { abortEarly: false })

    }

    static signupValidation() {

    }   
}

export default validation;