const connection = require('../database/connection')

module.exports = {
    async index(request, response) {

        const [count] = await connection('cases').count();

        const { page = 1 } = request.query;

        const cases = await connection('cases')
            .limit(12)
            .offset((page - 1) * 5)
            .select(['cases.*']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(cases);
    },

    async create(request, response) {
        const { title, description, value, donationUrl } = request.body;

        await connection('cases').insert(
            {
                title,
                description,
                value,
                donationUrl,
            });

        return response.status(200);
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('cases')
            .where('id', id)
            .first();

        await connection('cases').where('id', id).delete();

        return response.status(204).send();
    }
};