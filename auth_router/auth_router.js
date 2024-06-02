const express=require('express');
const { home } = require('../controller/controller');
const { dataStructure } = require('../controller/dataStructure');
const { StringDataStructure } = require('../controller/stringdataStructure');
const { mergesort } = require('../controller/mergesort');
const router= express.Router();

router.route("/").get(home);
router.route("/data").get(dataStructure);
router.route("/string").get(StringDataStructure);
router.route('/mergesort').get(mergesort);

module.exports={router};