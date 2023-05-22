import axios from 'axios';
import { useEffect, useState } from 'react';


const CollectData = (url) => {
    const [fetch, setFetching] = useState({isFetching: false})
    const [dataState, setDataState] = useState({data:[]});
    const [apiurl] = useState(url)



    useEffect(() => {
        const fetchDataFromApi = async () => {

            try{
                setFetching({isFetching: true})

                const response = await axios.get(apiurl)

                console.log(response);

                setDataState({...dataState, data:response.data})
            }
            catch(e){
                setFetching({fetch, isFetching:true})
            }
        };
        fetchDataFromApi();



    },[]);
    
    return [dataState]

}

export default CollectData


// CollectData is with 'C' because React component names should start with a capital letter. 
//  https://stackoverflow.com/questions/60818313/react-hook-useeffect-is-called-in-function-shoes-which-is-neither-a-react-fu