import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).populate('user');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, date, img, tags } = req.body;
  const newTask = new Task({
    title,
    date,
    img,
    tags,
    user: req.user.id
  });
  try {
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id
      },
      req.body,
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
