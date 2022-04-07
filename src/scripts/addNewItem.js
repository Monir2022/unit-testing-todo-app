import { v4 as uuidv4 } from 'uuid';
export default function addNewItem(name, price, setModal) {
  const newItem = {
    id: uuidv4(),
    name: name,
    price: price,
    acquired: false,
  };
  setModal(null)
  return newItem;
}
