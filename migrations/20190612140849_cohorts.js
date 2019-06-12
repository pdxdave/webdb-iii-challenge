
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', (tbl) => {
      tbl.increments(); // makes primary key, sets to integer, auto increments
      tbl.text('name', 128)  // column set to text, called name
         .notNullable()

      tbl.timestamps(true, true); // sets created at and updated timestamps
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts')
};
