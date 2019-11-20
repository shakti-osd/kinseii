const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.lname = !isEmpty(data.lname) ? data.lname : '';
  data.certificates = !isEmpty(data.certificates) ? data.certificates : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isLength(data.lname, { min: 2, max: 30 })) {
    errors.lname = 'Last Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.lname)) {
    errors.lname = 'Last Name field is required';
  }

  if (!Validator.isLength(data.certificates, { min: 2, max: 30 })) {
    errors.certificates = 'Certifiticates must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.certificates)) {
    errors.certificates = 'Certifiticates field is required';
  }

  if (!Validator.isLength(data.bio, { min: 2, max: 30 })) {
    errors.bio = 'Bio must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'Bio field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
