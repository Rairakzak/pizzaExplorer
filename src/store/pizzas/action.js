export const addPizza = ({ name, description, imageurl }) => ({
  type: "pizza/add",
  payload: {
    name,
    description,
    imageurl,
    id: Math.floor(Math.random() * 99),
  },
});
