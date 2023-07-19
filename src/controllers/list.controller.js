import List from '../models/list.model.js';

export const getLists = async (req, res) => {
  const lists = await List.find({
    user: req.user.id
  }).populate('user');
  res.json(lists);
};

export const createList = async (req, res) => {
  const { title } = req.body;
  const newList = new List({
    title,
    tasks: [],
    user: req.user.id
  });
  const savedList = await newList.save();
  res.json(savedList);
};

export const getList = async (req, res) => {
  const list = await List.findById(req.params.id).populate('tasks');
  if (!list) return res.status(404).json({ message: "List not found" });
  res.json(list);
};

export const updateList = async (req, res) => {
  const { title } = req.body;
  const list = await List.findByIdAndUpdate(
    req.params.id,
    { title },
    { new: true }
  );
  if (!list) return res.status(404).json({ message: "List not found" });
  res.json(list);
};

export const deleteList = async (req, res) => {
  const list = await List.findByIdAndDelete(req.params.id);
  if (!list) return res.status(404).json({ message: "List not found" });
  return res.sendStatus(204);
};
