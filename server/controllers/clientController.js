const Client = require('../models/Client');

exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

exports.addClient = async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.json(client);
};

exports.deleteClient = async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: 'Client deleted' });
};
