import Product from '../Product/Product';
import React, { useContext, useState } from 'react';
import styles from './Products.module.scss'

import {AppContext} from '../../App'
import Filter from '../Filter/Filter';
import Skeleton from '../Skeleton/Skeleton';

function Products() {
    const { products, isLoading} = useContext(AppContext)
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState(false)

    const cards = (filterValue ? [...products].sort((a, b) => a.price > b.price ? 1 : -1) : products)
    .filter((elem) => elem.title.toLowerCase().includes(searchValue.toLowerCase())) 

    return (  
        <section className={styles.products}>
            <div className={styles.head}>            
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все панамы`}</h1>   

                <Filter
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                />   

            </div>
            <div className={styles.body}>
                
                { !(!cards.length && searchValue) 
                ?
                   cards.map((item, index)=> 
                        !isLoading 
                        ?
                        <Product
                            item={item}
                            index={index}
                            key={`Продукт ${index+1}`}
                        />
                        : <Skeleton/>
                    )   
                :   <h2>По вашему запросу ничего не найдено</h2>
                }
            </div>
        </section>
    );
}

export default Products;