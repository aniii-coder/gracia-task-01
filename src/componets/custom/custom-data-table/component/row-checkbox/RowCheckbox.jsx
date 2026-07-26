import { useDispatch, useSelector } from "react-redux";
import {
  addExcludedId,
  addSelectedId,
  removeExcludedId,
  removeSelectedId,
} from "../../../../../features/temp/slices";
import heroStyles from "../../../../../features/home/component/HeroComponent.module.css";

export default function RowCheckBox({ row }) {
  const dispatch = useDispatch();

  const {
    isSelectedAll,
    selectedIds,
    excludedIds,
  } = useSelector((state) => state.table);

  const checked = isSelectedAll
    ? !excludedIds.includes(row.id)
    : selectedIds.includes(row.id);

  const handleChange = (e) => {
    const isChecked = e.target.checked;

    if (isSelectedAll) {
      // "All Selected" mode
      if (isChecked) {
        dispatch(removeExcludedId(row.id));
      } else {
        dispatch(addExcludedId(row.id));
      }
    } else {
      // Individual selection mode
      if (isChecked) {
        dispatch(addSelectedId(row.id));
      } else {
        dispatch(removeSelectedId(row.id));
      }
    }
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      className={heroStyles.checkbox}
    />
  );
}