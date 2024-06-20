import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct() {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
  return (
    <Layout>
      <h1>NewProduct</h1>
      <label>Product name</label>
      <input type="text" placeholder="product name" value={title} onChange={(ev)=>setTitle(ev.target.value)}></input>
      <label>Description</label>
      <textarea placeholder="description" value={description} onChange={(ev)=>setDescription(ev.target.value)}></textarea>
      <label>Price (in Rs.)</label>
      <input type="number" placeholder="Price" value={price} onChange={(ev)=>setTitle(ev.target.value)}></input>
      <button className="btn-primary">Save</button>
    </Layout>
  );
}
