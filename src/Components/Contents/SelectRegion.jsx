import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import SelectProvince from './SelectProvince'

const SelectRegion = ({ arrayProvince }) => {
    const [region, setRegion] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const optionRegions = [];
    const UniqueRegions = arrayProvince
        .map(function(region, index) {
            return region.region
        })
        .filter((val,id,array) =>array.indexOf(val) === id);

    const pushData = () =>{
             UniqueRegions.forEach((element) =>{
             optionRegions.push({ label: `${element}`, value: element});
            });
    }
    pushData(UniqueRegions);

    useEffect(() =>{
        if(region.length !== 0){
            const optionProvinces = []
            const getProvinces = arrayProvince.filter((val,) => val.region === region.label).map((val) => val.Province);
            const UniqueProvince = getProvinces.filter((val,id,array) => array.indexOf(val) === id)
            const pushData = (UniqueProvince) =>{
                UniqueProvince.forEach((element) =>{
                optionProvinces.push({ label: `${element}`, value: element});
                });
            }
            pushData(UniqueProvince);
            setProvinces(optionProvinces);
        }
    }, [region, arrayProvince])
    
    return (
         <div>
            <h2>Select Region</h2>
             <Select
                onChange={setRegion}
                options={optionRegions}
                placeholder="Select Regions"
                isSearchable
            />
            <SelectProvince provinces = {provinces} />
        </div>
    )
}

export default SelectRegion
