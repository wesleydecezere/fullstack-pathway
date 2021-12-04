import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

function startServer({ typeDefs, resolvers }) {
    mongoose.connect('mongodb://balta:e296cd9f@localhost:27017/admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    const server = new ApolloServer({ typeDefs, resolvers })

    server.listen().then(({url}) => console.log(`🔥 Server starter at ${url}`))
}

export default startServer