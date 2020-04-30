const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { name, user, password } = request.body;

        const id = generateUniqueId();

        await connection('users').insert({
            id,
            name,
            user,
            password
        })

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('users')
            .where('id', id)
            .first();

        await connection('users').where('id', id).delete();

        return response.status(204).send();
    }
};