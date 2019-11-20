const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');

// Load User Model
const User = require('../../models/User');

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
   // console.log(req.params);
    const errors = {};   
    
    User.findOne({  _id: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);


// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid } = validateProfileInput(req.body);
    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    
    // Get fields
    const profileFields = {};
    if (req.body.name) profileFields.name = req.body.name;
    if (req.body.lname) profileFields.lname = req.body.lname;
    if (req.body.certificates) profileFields.certificates = req.body.certificates;
    if (req.body.bio) profileFields.bio = req.body.bio;

  

    User.findOne({ _id: req.user.id }).then(profile => {

      if (profile) {
        // Update
        User.findOneAndUpdate(
          { _id: req.user.id },
          { $set: profileFields },
          { useFindAndModify: false }
        ).then(profile => res.json(profile));
      } else {
        // Create
        profile => res.json(profile)
        // Check if handle exists
        // User.findOne({ handle: profileFields.handle }).then(profile => {
        //   if (profile) {
        //     errors.handle = 'That handle already exists';
        //     res.status(400).json(errors);
        //   }

        //   // Save Profile
        //   new User(profileFields).save().then(profile => res.json(profile));
        // });
      }
    });
  }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
