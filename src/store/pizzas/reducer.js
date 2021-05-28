const intialState = {
  list: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      image:
        "https://www.dominos.nl/ManagedAssets/NL/product/PMAR/NL_PMAR_all_hero_7559.jpg?v-65259831",
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      image:
        "https://uncutrecipes.com/Images-Recipes-Italian/Pizza-alla-Napoletana-with-Mozzarella-Cheese.jpg",
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      image:
        "https://img.static-rmg.be/a/food/image/q100/w480/h360/1087722/pizza-bianca-met-artisjok-en-mortadella.jpg",
    },
  ],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "pizza/add": {
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
            image: action.payload.imageurl,
          },
        ],
      };
    }

    default:
      return state;
  }
};
export default reducer;
// https://images.ctfassets.net/uexfe9h31g3m/6oBxgSjH9KoYuQqS2uO4Kc/a4b920125e77646ca7a573932a6301d6/GLUTEN-FREE-PIZZA.jpg?w=1024&h=768&fm=webp&fit=thumb&q=90
