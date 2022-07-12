import React, { useState, useEffect } from "react";
import axios from "axios";
import { checkResultErrors } from "ethers/lib/utils";

const Search = () => {
    const [terms, setTerms] = useState('programing');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: { 
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                search: terms
            }});
            setResults(data);
        }

        search();
    }, [terms]);

    const renderResults = results.map((result) => {})

    return ( 
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term</label>
                        <input 
                            value={terms}
                            onChange={e => setTerms(e.target.value)}
                            className="input"></input>
                    </div>
                </div>
            </div>
            
        );
};

export default Search;