import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const groupedItems = items.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(groupedItems).map(([category, items]) => (
        <section key={category}>
          <h2 className="text-xl font-semibold capitalize mb-2">
            {category}
          </h2>
          <ul className="space-y-3">
            {items.map((item) => (
             <Item key={item.id} {...item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
