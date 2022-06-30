import React from 'react';
import styles from './Filter.module.scss'

function Filter({ searchValue, setSearchValue, filterValue, setFilterValue }) {




    return (  
        <div className={styles.filter}>
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                type="text" 
            />
            <select 
                name="filter" 
                value={filterValue}
                onChange={(e) => {setFilterValue(e.target.value)
                console.log(filterValue)}}
            >
                <option value="">По умолчанию</option>
                <option value="price">По цене</option>
            </select>
        </div>
    );
}

export default Filter;