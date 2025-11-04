import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function AdminDashboard() {
  const { addProduct } = useContext(ProductContext);
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) return alert("Please fill all fields");
    addProduct({
      name: form.name,
      price: parseFloat(form.price),
      image: form.image,
    });
    setForm({ name: "", price: "", image: "" });
    alert("✅ Product added successfully!");
  };

  return (
    <div className="mt-10 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Admin Dashboard</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-xl space-y-4"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
