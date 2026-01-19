"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/items", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch items");
        const items = await res.json();

        const foundItem = items.find(
          (i) => i._id === id || i._id?.toString() === id,
        );
        setItem(foundItem || null);
      } catch (err) {
        console.error(err);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!item) return <p className="text-center mt-10">Item not found</p>;

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="card bg-base-100 shadow-xl p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <p className="font-semibold text-lg">Price: ৳ {item.price}</p>
        {item.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover rounded-lg my-4"
          />
        )}

        <Link href="/items" className="btn btn-outline mt-6">
          Back to Items
        </Link>
      </div>
    </div>
  );
}
