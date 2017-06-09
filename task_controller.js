let tasks = require('./task_model');

module.exports = {
  get: (req, res) => {
    res.status(200).send(tasks);
  },
  add: (req, res) => {
    const id = tasks[ tasks.length - 1 ].id + 1;
    tasks.push({
      id,
      title: req.body.title,
      description: "",
      completed: false
    });

    res.status(200).send(tasks);
  },
  patch: (req, res) => {
    tasks[ req.params.id ] = Object.assign({}, tasks[ req.params.id ], req.body);
    res.status(200).send(tasks);
  },
  delete: (req, res) => {
    tasks = tasks.filter( task => task.id != req.params.id );
    res.status(200).send(tasks);
  },
  complete: (req, res) => {
    tasks[ req.params.id ].completed = true;
    res.status(200).send(tasks);
  }
}