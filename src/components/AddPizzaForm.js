import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/action";

export default function AddPizzaForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log("new pizza:", name, description,imageurl);
    dispatch(
      addPizza({
        name,
        description,
        imageurl,
      })
    );
    setName("");
    setDescription("");
    setImageurl("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
     
      <p>
        <label>
          Image URL:{" "}
          <input
            type="text"
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
