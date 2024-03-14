import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries , setCountries] = useState([]);
    const [visitedCountries , setVisitedCountries] = useState([]);
    const [visitedFlags , setVisistedFlags] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const hadnleVisitedCountry = (country) =>
    {
        console.log("add this country");
        const newVisitedCountries = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) =>
    {
        console.log("add this flag");
        const newVisitedFlags = [...visitedFlags , flag];
        setVisistedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Visited: {countries.length}</h3>
            <div>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <ul>
                {
                    visitedCountries.map(country =>
                        <li key={country.cca3}>{country.name.common}</li>
                        )
                }
            </ul>
            </div>
            <div className="flags-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className="countries">
            {
                countries.map(country => <Country key={country.cca3} hadnleVisitedCountry = {hadnleVisitedCountry} handleVisitedFlags = {handleVisitedFlags} country = {country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;