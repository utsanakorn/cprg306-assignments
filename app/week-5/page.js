import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div>
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Add New Shopping List Item
        </h1>
        <NewItem />
      </div>
    </main>
  );
}