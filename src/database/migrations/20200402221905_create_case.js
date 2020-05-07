exports.up = function (knex) {
    return knex.schema.createTable('cases', function (table) {
        table.increments('id');
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.decimal('value').nullable();
        table.string('donationUrl').nullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cases');
};