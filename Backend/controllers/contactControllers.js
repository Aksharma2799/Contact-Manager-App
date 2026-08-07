const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts..." });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact with ID ${req.params.id}...` });
};

const createContact = (req, res) => {
  //   const result = req.body;
  res.status(201).json({ message: "Create a new contact..." });
};

const updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Update contact with ID ${req.params.id}...` });
};

const deleteContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Delete contact with ID ${req.params.id}...` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
