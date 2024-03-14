import { useState } from 'react';
import './Country.css';
const Country = ({country , hadnleVisitedCountry,handleVisitedFlags}) => {
    const {name, flags
    , population , area , cca3} = country;
    const [visited , setVisited] = useState(false);

    const handleVisited = () =>
    {
        if(visited == true)
        {
            setVisited(false);
        }
        else setVisited(true);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => hadnleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited && 'I have Visited This Country.'}
            {visited || "I Want to Travel This Country."}
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country;