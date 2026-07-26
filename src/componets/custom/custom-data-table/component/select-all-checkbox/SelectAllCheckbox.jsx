
import { useDispatch, useSelector } from "react-redux";
import { setIsSelectedAll } from "../../../../../features/temp/slices";
import heroStyles from '../../../../../features/home/component/HeroComponent.module.css'

export default function SelectAllCheckbox() {
  const dispatch = useDispatch();
const checked = useSelector(
  (state) => state.table.isSelectedAll
);

// console.log('isSelectedAll :>> ', isSelectedAll);


  return (
    // <input
    //   type="checkbox"
    //   checked={isSelectedAll}
    //   onChange={(e) =>
        //     dispatch(setIsSelectedAll(e.target.checked))
        //   }
        // />
        <input
        checked={checked}
          className={heroStyles.checkbox}      
    type="checkbox"
    onChange={(e) =>
        dispatch(setIsSelectedAll(e.target.checked))
    }
/>
  );
}