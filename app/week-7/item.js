export default function Item({ name }) {
  return (
    <li className=" border rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-white text-lg">{name}</h3>
   </li>
  );
}
