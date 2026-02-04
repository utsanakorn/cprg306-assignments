export default function Item({ name, quantity, category }) {
  return (
    <li className="py-3 pl-4 pr-100 bg-black border border-white mb-4 rounded-lg list-none w-full ">
      <div className="text-xl text-white mb-1">{name}</div>
      <div className="text-xl text-white">Quantity: {quantity}</div>
      <div className="text-xl text-white capitalize">Category: {category}</div>
    </li>
  );
}