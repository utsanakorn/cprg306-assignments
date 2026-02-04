import GroceryItemList from './GroceryItemList';

export default function Page() {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center ">
    <div>
        <h1 className="text-4xl font-bold text-white mb-5 mt-8">Shopping List</h1>
        <GroceryItemList />
    </div>
    </main>
  );
}