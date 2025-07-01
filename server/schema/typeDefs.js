const gql = require('graphql-tag');

module.exports = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    address: String
  }

  type Service {
    id: ID!
    description: String!
    rate: Float!
    quantity: Int!
  }

  type InvoiceService {
    service: Service!
    quantity: Int!
  }

  type Invoice {
    id: ID!
    client: Client!
    services: [InvoiceService!]!
    date: String!
  }

  type Query {
    getClients: [Client!]
    getServices: [Service!]
    getInvoices: [Invoice!]
    getInvoiceById(id: ID!): Invoice
  }

  input ClientInput {
    name: String!
    email: String!
    address: String
  }

  input ServiceInput {
    description: String!
    rate: Float!
    quantity: Int!
  }

  input InvoiceServiceInput {
    service: ID!
    quantity: Int!
  }

  input InvoiceInput {
    client: ID!
    services: [InvoiceServiceInput!]!
  }

  type Mutation {
    addClient(input: ClientInput!): Client!
    deleteClient(id: ID!): String!

    addService(input: ServiceInput!): Service!
    deleteService(id: ID!): String!

    createInvoice(input: InvoiceInput!): Invoice!
    deleteInvoice(id: ID!): String!
  }
`;
