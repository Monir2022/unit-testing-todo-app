import { useRecoilState } from "recoil";
import { sortByName, sortByPrice } from "../scripts/sortList";
import { listState } from "../state/listState";

export default function Sorter() {
  const [list, setList] = useRecoilState(listState);
  function sortListByName(list) {
    const sortedList = sortByName(list);
    setList(sortedList);
  }
  function sortListByPrice(list) {
    const sortedList = sortByPrice(list);
    setList(sortedList);
  }
  return (
    <section className='sorter'>
      <span>Sort by:</span>
      <button data-testid='byName' onClick={() => sortListByName(list)}>Name</button>
      <button data-testid='byPrice'onClick={() => sortListByPrice(list)}>Price</button>
    </section>
  );
}