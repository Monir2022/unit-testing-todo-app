import { v4 as uuidv4 } from 'uuid';
export default function addNewItem(itemName, itemPrice,setModal) {
  const newItem = {
    id: uuidv4(),
    name: itemName,
    price: itemPrice,
    acquired: false,
  };
  setModal(null)
  return newItem;
}
