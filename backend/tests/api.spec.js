const frisby = require("frisby");

let idToDelete = "";
const baseUrl = "http://localhost:3000";

it("should return a status of 200", () => {
  return frisby.get(baseUrl).expect("status", 200);
});

it("should create a todo", () => {
  return frisby
    .post(`${baseUrl}/todo`, { name: "todozinho de test" })
    .expect("status", 201)
    .expect("json", "name", "todozinho de test")
    .then((result) => {
      console.log(result.json);
      idToDelete = result.json.id;
    });
});

it("should update a todo", () => {
  return frisby
    .put(`${baseUrl}/todo`, {
      _id: idToDelete,
      name: "tentando atualizar o todozinho",
    })
    .expect("status", 201)
    .expect("json", "name", "tentando atualizar o todozinho");
});

it("should list todos", () => {
  return frisby.get(`${baseUrl}/todos`).expect("status", 200);
});

it("should delete a todo", () => {
  return frisby.delete(`${baseUrl}/todo/${idToDelete}`).expect("status", 204);
});
