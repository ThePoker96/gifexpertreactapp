import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = ({ value }) => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }
    // setCategories(casts =>[...categories, 'HunterXheunter'])
    return (
        <>
            <h2>{value}</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

GiftExpertApp.propType = {
    saludo: PropTypes.string.isRequired
}

export default GiftExpertApp;