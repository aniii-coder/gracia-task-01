import { Search } from "lucide-react";
import styles from "./Searchbar.module.css";

import React from 'react'

const SearchBar = () => {
  return (
   <div className={styles.searchBar}>
  <Search size={18} strokeWidth={2} />
  <input
    type="text"
    placeholder="Search"
  />
</div>
  )
}

export default SearchBar
