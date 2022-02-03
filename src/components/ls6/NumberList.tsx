import {ReactElement} from 'react';
import ListItem from './ListItem';

interface IProps {
  numbers: number[];
}

export default function NumberList(props: IProps): ReactElement {
  const {numbers} = props;
  /**
   * Keys help React identify which item have changed, are added,
   * or are removed. Keys should be give to the elements inside
   * the array to give the elements a stable identity.
   *
   * the best way to pick a key is to use a string that uniquely
   * identifies a list item among its siblings.
   *
   * ===========================================================
   * We don't recommend using indexes for key if the order of
   * items may change.
   * This can negatively impact performance and may cause issues
   * with component state.
   */
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ));

  return <ul>{listItems}</ul>;
}
