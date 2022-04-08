//Project files
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list, editList }) {
  const items = list.map((item) => (
    <ShoppingItem key={item.id} item={item} editList={editList} />
  ));

  return <div>{list.length > 0 ? items : <p>No items to show!</p>}</div>;
}
