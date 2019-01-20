const Items = require('../models').items;
const _ = require('lodash');
const models = require ('../models');

module.exports = {
  createUser: (req, res, next) => {
    console.log(req.body)
    const { item } = req.body;
    return Items
    .create({ item })
    .then(item => res.status(200).json({ status: 'Created one item', item }))
    .catch(error => console.log(error));
  },

  getAllItems: (req, res, next) => {
    return Items
    .findAll({paranoid: false})
    .then(items => res.status(200).json({ status: 'Retrieved all items', items }))
    .catch(error => console.log(error));
  },

  getSingleUser: (req, res, next) => {
    const { id } = req.params;
    return Items
    .findById(id)
    .then(item => res.status(200).json({ status: 'Retrieved one item', item }))
    .catch(error => console.log(error));
  },

  updateUser: (req, res, next) => {
    const { id } = req.params;
    const { item } = req.body;
    return Items
    .findById(id)
    .then(item => {
      if (!item) {
        return res.status(404).send({ message: 'Item not found' })
      }
      return item
      .update({
        item: item
      })
      .then(item => res.status(200).json({ status: 'Updated one item', item }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  },

  destroyUser: (req, res, next) => {
    const { id } = req.params;
    return Items
    .findById(id)
    .then(item => {
      if (!item) {
        return res.status(404).send({ message: 'Item not found' })
      }
      return item
      .destroy()
      .then(() => res.status(200).json({ status: 'Deleted one item', item }))
      .catch(error => console.log(error));
    })
  },
};