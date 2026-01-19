import Image from "next/image";
import Link from "next/link";

async function getItems() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">All Items</h1>
        <p className="mt-3 text-gray-500">
          Browse our available items with details and pricing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure className="p-4">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-xl object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-primary">
                  ৳ {item.price}
                </span>

                <Link
                  href={`/items/${item._id}`}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
