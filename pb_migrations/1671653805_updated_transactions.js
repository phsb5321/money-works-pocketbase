migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0nisggri89xhdb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9rnkptpc",
    "name": "is_expense",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0nisggri89xhdb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9rnkptpc",
    "name": "is_expense",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
