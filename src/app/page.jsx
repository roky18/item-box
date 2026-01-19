/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <section className="hero mt-8 w-11/12 mx-auto h-[60vh] relative  text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/ItemBox Banner.png"
            alt="Hero Background"
            className="object-cover relative w-full h-[60vh] brightness-50"
          />
        </div>
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Welcome to ItemBox</h1>
            <p className="py-6 text-lg">
              A simple Next.js app to explore, view and add items.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/items" className="btn btn-primary">
                View Items
              </Link>
              <Link href="/login" className="btn btn-secondary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 w-11/12 mx-auto my-8 bg-base-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Features</h2>
        <div className="grid p-6 grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Browse Items</h3>
            <p>View all items with details and images.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Add Items</h3>
            <p>Authenticated users can add new items easily.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Secure Login</h3>
            <p>Mock authentication with cookies or NextAuth integration.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 w-11/12 mx-auto my-8 bg-base-200 text-center">
        <h2 className="text-4xl font-bold mb-4">About ItemBox</h2>
        <p className="max-w-2xl mx-auto text-lg">
          ItemBox is a learning project to understand Next.js App Router,
          DaisyUI, and protected routes with mock authentication.
        </p>
      </section>

      {/*Our service Sections */}
      <section className="py-16 w-11/12 mx-auto p-6 bg-base-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Fast Setup</h3>
            <p>Built with Next.js 16, App Router, Tailwind & DaisyUI.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Easy Navigation</h3>
            <p>Navbar links to Login and Items page.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Modern UI</h3>
            <p>Responsive design with DaisyUI components.</p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 my-8 bg-base-200 w-11/12 mx-auto text-black-content text-center">
        <h2 className="text-4xl font-bold mb-4">Get Started Now!</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Explore the items, login and add your own items securely.
        </p>
        <Link href="/add-item" className="btn btn-secondary btn-lg">
          Login to Add Items
        </Link>
      </section>
    </main>
  );
}
