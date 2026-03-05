export default function Item({ item }) {
  if (!item) return null;
  return (
  <div className="border border-gray-600 rounded-lg p-4 mb-2">
      <p className="font-bold">{item.name} {item.emoji ?? ""}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}
