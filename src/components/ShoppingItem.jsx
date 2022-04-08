export default function ShoppingItem({ item, editList }) {
  const { name, price, acquired } = item;

  //Methods
  function editItem(key, editedValue) {
    const editedItem = { ...item };
    editedItem[key] = editedValue;
    editList(editedItem);
  }

  return (
    <section className="shopping-item">
      <label className="container">
        <input
          data-testid="checkbox"
          type="checkbox"
          checked={acquired}
          onChange={() => editItem("acquired", !acquired)}
        />
        <span className="checkmark"></span>
      </label>
      <span>{name}</span>
      <span>{price}:-</span>
    </section>
  );
}
