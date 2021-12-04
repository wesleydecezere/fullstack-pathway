import User from '../../../models/User'

export default {
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => User.findById(id).then()
    },
    Mutation: {
        createUser: async (_, { data }) => await User.create(data),
        updateUser: async (_, { id, data }) => await User.findOneAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id))
    }
}