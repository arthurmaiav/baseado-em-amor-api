const connection = require('../database/connection')

module.exports = {
    async index(request, response) {

        const cases = await connection('cases')
            .select('*');

        return response.json(cases);
    }
}