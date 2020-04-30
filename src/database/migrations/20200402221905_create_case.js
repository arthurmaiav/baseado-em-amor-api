exports.up = function (knex) {
    return knex.schema.createTable('cases', function (table) {
        table.increments('id');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('donationUrl');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cases');
};
    