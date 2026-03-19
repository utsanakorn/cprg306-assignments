export default function Item({ item, onSelect }) {
  if (!item) return null;
  
  return (
    <div 
      className="border border-gray-600 rounded-lg p-4 mb-2 cursor-pointer hover:bg-slate-800 transition"
      onClick={() => {
        console.log("Clicked!", item.name); 
        onSelect();
      }}
    >
      <p className="font-bold">{item.name} {item.emoji ?? ""}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}
