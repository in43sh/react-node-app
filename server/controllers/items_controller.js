const Items = require('../models').items;
// const _ = require('lodash');
const models = require ('../models');

module.exports = {
  createItem: (req, res, next) => {
    console.log(req.body)
    // res.status(200).json({ status: 'Created one item' })
    const { name } = req.body;
    return Items
    .create({ name })
    .then(item => res.status(200).json({ status: 'Created one item', item }))
    .catch(error => console.log(error));
  },

  getAllItems: (req, res, next) => {
    return Items
    .findAll({paranoid: false})
    .then(items => res.status(200).json({ status: 'Retrieved all items', items }))
    .catch(error => console.log(error));
  },

  getSingleItem: (req, res, next) => {
    const { id } = req.params;
    return Items
    .findById(id)
    .then(item => res.status(200).json({ status: 'Retrieved one item', item }))
    .catch(error => console.log(error));
  },

  updateItem: (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    return Items
    .findById(id)
    .then(item => {
      if (!item) {
        return res.status(404).send({ message: 'Item not found' })
      }
      return item
      .update({
        name: name
      })
      .then(item => res.status(200).json({ status: 'Updated one item', item }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  },

  destroyItem: (req, res, next) => {
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