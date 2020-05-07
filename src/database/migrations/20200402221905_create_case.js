exports.up = function (knex) {
    return knex.schema.createTable('cases', function (table) {
        table.increments('id');
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.float ('value');
        table.string('donationUrl');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cases');
};