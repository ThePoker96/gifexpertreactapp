import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(img => {
                setState({
                    data: img,
                    loading: false
                });
            })
    }, [category])

    // setTimeout(() => {
    //     setState(
    //         {
    //             data: [1, 2, 3, 4, 5, 6, 7],
    //             loading: false
    //         }
    //     )

    // }, 3000);

    return state; //{data: [], loading: true}
}