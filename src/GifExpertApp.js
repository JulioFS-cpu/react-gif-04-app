import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["overwatch"]);

    return (

        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(categories => {
                        return <GifGrid
                            category={categories}
                            key={categories}
                        />;
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;