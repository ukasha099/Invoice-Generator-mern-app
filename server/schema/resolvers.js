const Client = require('../models/Client');
const Service = require('../models/Service');
const Invoice = require('../models/Invoice');

module.exports = {
  Query: {
    getClients: async () => await Client.find(),
    getServices: async () => await Service.find(),
    getInvoices: async () => await Invoice.find().populate('client').populate('services.service'),
    getInvoiceById: async (_, { id }) => await Invoice.findById(id).populate('client').populate('services.service'),
  },

  Mutation: {
    addClient: async (_, { input }) => {
      const client = new Client(input);
      return await client.save();
    },
    deleteClient: async (_, { id }) => {
      await Client.findByIdAndDelete(id);
      return 'Client deleted';
    },

    addService: async (_, { input }) => {
      const service = new Service(input);
      return await service.save();
    },
    deleteService: async (_, { id }) => {
      await Service.findByIdAndDelete(id);
      return 'Service deleted';
    },

    createInvoice: async (_, { input }) => {
      const invoice = new Invoice(input);
      return await invoice.save();
    },
    deleteInvoice: async (_, { id }) => {
      await Invoice.findByIdAndDelete(id);
      return 'Invoice deleted';
    },
  },

  InvoiceService: {
    service: async (parent) => await Service.findById(parent.service),
  },
};
