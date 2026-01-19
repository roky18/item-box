"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to add item");

      setSuccess("Item added successfully!");
      setError("");
      setName("");
      setDescription("");
      setPrice("");
      setImage("");

      router.push("/items"); // redirect to items page
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <div className="w-11/12 min-h-screen md:w-2/3 lg:w-1/3 mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Item</h1>

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mb-4 text-center">{success}</p>}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-base-100 p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full mt-2">
          Add Item
        </button>
      </form>
    </div>
  );
}
