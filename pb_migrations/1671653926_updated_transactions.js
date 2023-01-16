migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0nisggri89xhdb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n2fujb9c",
    "name": "is_recurring",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uyplhlgs",
    "name": "deadline",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0nisggri89xhdb")

  // remove
  collection.schema.removeField("n2fujb9c")

  // remove
  collection.schema.removeField("uyplhlgs")

  return dao.saveCollection(collection)
})
