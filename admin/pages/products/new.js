import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    axios
      .post("/api/products", data)
      .then((response) => {
        // Optionally, you could reset the form or show a success message here
        setTitle("");
        setDescription("");
        setPrice("");
        console.log("Product created successfully:", response);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        // Optionally, you could show an error message to the user here
      });
  }
  return (
    <Layout>
      <form onSubmit={createProduct}>
        {" "}
        <h1>NewProduct</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>
        <label>Price (in Rs.)</label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        ></input>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}
