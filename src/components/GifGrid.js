import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGif';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__aminated animate_fadeIn"> {category} </h3>

            {loading && <p className="animate__aminated animate_flash">Loading...</p>}
            <div className="card-grid">

                {
                    data.map((img) => (
                        < GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )

}