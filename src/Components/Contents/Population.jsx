import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import Chart from './Chart'


const ContentGrid = styled.div `
    position: relative;
    width:100%;
    height:125px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:30px;
    background:#e4f9f5;
    
    @media(max-width: 768px){
        gap:10px;
        height:auto;
        flex-flow:column;
    }
`
const PopulationItems = styled.div `
    h2{
        text-align:center;
        color:#40514e;
    }
    h1{
        text-align:center;
    }
`
const PopulationVal = styled.div `
    display:flex;
    flex-flow:column;
    align-items:center;
    h2{
        color:#40514e;
    }
`
const Line = styled.div `
    width: .01rem;
    height: 3.5rem;
    background-color:#40514e;
    border-radius: 10px;
    transform-origin: 1px;
    @media(max-width: 768px){
        width:80%;
        height: .01rem;
    }
`
const PupulationDensity = styled.div `
    h2{
        text-align:center;
        color:#40514e;
    }
      h1{
        text-align:center;
    }
`

const GloRank = styled.div `
    h2{
        text-align:center;
        color:#40514e;
    }
    h1{
        text-align:center;
    }
    
`

 const Population = ({ provinceData }) => {
    const [total, setTotal] = useState([]);
    const [male, setMale] = useState([]);
    const [female, setFeMale] = useState([]);

    useEffect(() =>{
        const [Total, Male, Female] = provinceData
        setTotal(Total);
        setMale(Male);
        setFeMale(Female);
    },[provinceData])
    


    const totalFilter = Object.keys(total)
     .filter(data => data !== 'ID' &&
        data !== 'region' &&
        data !== 'Province' &&
        data !== 'Density' &&
        data !== 'Sex' &&
        data !== 'medianAge' &&
        data !== 'Rank' &&
        data !== 'Total' &&
        data !== 'Undefine')
    .map(data => {
         return total[data]
     });   
     const maleFilter = Object.keys(male)
     .filter(data => data !== 'ID' &&
        data !== 'region' &&
        data !== 'Province' &&
        data !== 'Density' &&
        data !== 'Sex' &&
        data !== 'medianAge' &&
        data !== 'Rank' &&
        data !== 'Total' &&
        data !== 'Undefine')
    .map(data => {
         return male[data]
     });
    const femaleFilter = Object.keys(female)
     .filter(data => data !== 'ID' &&
        data !== 'region' &&
        data !== 'Province' &&
        data !== 'Density' &&
        data !== 'Sex' &&
        data !== 'medianAge' &&
        data !== 'Rank' &&
        data !== 'Total' &&
        data !== 'Undefine')
    .map(data => {
         return female[data]
     });
    return (
        <React.Fragment>
            <ContentGrid>
                <PopulationItems>
                    <h2>
                        {`${total.Province} Population`}
                    </h2>
                    <h1>
                        {total.Total}
                    </h1>
                </PopulationItems>
                <Line />
                <PopulationVal>
                    <h2>
                        Median Age
                    </h2>
                    <h1>
                        {total.medianAge}
                    </h1>
                </PopulationVal>
                <Line />
                <GloRank>
                    <h2>
                        {(total.Province === 'Thailand') ? ('Global') : ('Nation')}
                    </h2>
                    <h2>
                        Rank
                    </h2>
                    <h1>
                        {total.Rank}
                    </h1>
                </GloRank>
                <Line />
               <PupulationDensity>
                    <h2>
                        Density
                        (P/Km²)
                    </h2>
                    <h1>
                        {total.Density}
                        <br/>
                        {Math.random()}
                    </h1>
                </PupulationDensity>
            </ContentGrid> 
            <Chart total={totalFilter} male={maleFilter} female={femaleFilter}/>
        </React.Fragment>
    )
}

export default React.memo(Population)
