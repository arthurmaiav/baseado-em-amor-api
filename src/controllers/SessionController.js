const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const{user, password} = request.body;
        
        const userInput = await connection('users')
            .where('user', user)
            .andWhere('password', password)
            .select('name')
            .first();

            if(!userInput) {
                return response.status(400).json({ error: 'No ONG found with this ID'});
            }

            return response.json(userInput).send();
    }
}