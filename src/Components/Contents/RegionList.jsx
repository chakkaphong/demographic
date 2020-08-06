import React, { useState, useEffect } from 'react';

import DataContext from './DataContext'
import SelectRegion from './SelectRegion'

function RegionList() {
    const [provinceList, setProvince] = useState([]);
    const [isLoad, setIsLoad] =useState(true);

    useEffect(() =>{
        let mounted = true;
        const callApi = async () => {
             console.log('callApi')
             const response = await fetch("https://raw.githubusercontent.com/chakkaphong/demographic/master/data.json"); 
             const data = await response.json();
             if (mounted) {
                setProvince(data);
                setIsLoad(false);
            }
        }
        callApi()
        return () => {
            mounted = false;
        }
        
    }, []);
    const arrayProvince = [...provinceList];

    return (
        <div>
            <DataContext.Provider value={arrayProvince}>
                {isLoad ?(
                    <div>Loading...</div>
                ) : (
                <SelectRegion arrayProvince = {arrayProvince} />       
                )}
            </DataContext.Provider>
        </div>
    )
}

export default RegionList
