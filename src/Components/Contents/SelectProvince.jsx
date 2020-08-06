import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import DataContext from './DataContext';
import Population from './Population';

const SelectProvince = ({ provinces }) => {
    const arrayProvince = React.useContext(DataContext);

    const [province, setProvince] = useState([]);
    const [selectProvince, setSelectProvince] = useState([]);
    const [isCheck, setIsCheck] = useState(false)


    useEffect(() =>{
        if(province.length !== 0){
            const segmentProvince = arrayProvince.filter((val) =>val.Province === province.label);
            setSelectProvince(segmentProvince);
            setIsCheck(true);
        }

    }, [province, arrayProvince]);

    return (
        <div>
            <h2>Select Province</h2>
            <Select
                onChange={setProvince}
                options={ provinces }
                placeholder="Select Province...."
                isSearchable
            />
            {
            (isCheck) ? 
                (<Population provinceData = {selectProvince} /> ) 
                :(null)
            } 

        </div>
    )
}

export default SelectProvince
