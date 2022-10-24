let user = [
  {
    namae: "a",
    password: "123",
  },
  {
    namae: "b",
    password: "1234",
  },
  {
    namae: "c",
    password: "12345",
  },
  {
    namae: "d",
    password: "123456",
  },
  {
    namae: "e",
    password: "1234567",
  },
];

async function getUser() {
  let resp = await fetch(user);
  let result = await resp.json();

  console.log(result);
}
