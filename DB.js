class DB {
  db = [];
  all = () => this.db;
  create = (val) => this.db.push({ pk: this.db.length, val });
  read = (pk) => this.db[pk];
  update = (pk, val) => this.db[pk] = { pk, val };
  delete = (pk) => this.db = this.db.filter(item => item.pk !== pk);
}

module.exports = DB;
