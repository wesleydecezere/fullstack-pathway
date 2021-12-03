const {ApolloServer, gql} = require('apollo-server')

// definir atributo obrigatório -> atrr: type!

const typeDefs = gql`
    type User {
        _id: ID!
        name: String! 
        email: String 
        salario: Float
        filhos: Int
        active: Boolean!
    }
    type Post {
        _id: ID!
        title: String!
        content: String
        author: User!
    }

    type Query {
        hello: String
        users: [User!]!
        getUserByEmail(email: String!): User!
    }

    type Mutation {
        createUser(name: String!, email: String): User!
    }
`

const users = [
    { _id: String(Math.random()), name: 'Name 1', active: true },
    { _id: String(Math.random()), name: 'Name 2', email: "name.1@mail.com", active: true },
    { _id: String(Math.random()), name: 'Name 3', salario: 1415.32, active: false }
]

const resolvers = {
    Query: {
        hello: () => 'Hello world',

        users: () => users,
        getUserByEmail: (_, args) => {
            return users.find((user) => user.email === args.email)
        }
    },
    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true
            }
            users.push(newUser)
            return newUser
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => console.log(`Server started at ${url}`))