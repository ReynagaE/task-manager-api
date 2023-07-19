import List from '../models/list.model.js';

export const getLists = async (req, res) => {
  try {
    const lists = await List.find({ user: req.user.id }).populate('user');
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createList = async (req, res) => {
  const { title } = req.body;
  const newList = new List({
    title,
    tasks: [],
    user: req.user.id
  });
  try {
    const savedList = await newList.save();
    res.json(savedList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getList = async (req, res) => {
  try {
    const list = await List.findOne({
      _id: req.params.id,
      user: req.user.id
    }).populate('tasks');
    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateList = async (req, res) => {
  const { title } = req.body;
  try {
    const list = await List.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id
      },
      { title },
      { new: true }
    );
    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteList = async (req, res) => {
  try {
    const list = await List.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
