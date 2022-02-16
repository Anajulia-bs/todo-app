import connections from ('../connection');


// choose the collection
const getCollection = () =>
  connections().then((db) => db.collection('todoList'));

// Add to-do item on DB
export const addTodoDB = async ({ todo }) =>
  (await getCollection())
    .insertOne({ todo })
    .then(({ insertedId }) => ({
      _id: ObjectId(insertedId),
     todo,
    }));

// Delete to-do by ID in DB
export const deleteTodoDB = async ({ id }) =>
(await getCollection()).deleteOne({_id:id});
