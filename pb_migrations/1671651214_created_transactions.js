migrate((db) => {
  const collection = new Collection({
    "id": "g0nisggri89xhdb",
    "created": "2022-12-21 19:33:34.347Z",
    "updated": "2022-12-21 19:33:34.347Z",
    "name": "transactions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m5b5auqv",
        "name": "amount",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "9rnkptpc",
        "name": "is_expense",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "dnimtwmv",
        "name": "created_by",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "9ovg4jzp",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g0nisggri89xhdb");

  return dao.deleteCollection(collection);
})
