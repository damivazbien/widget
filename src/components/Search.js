import React, { useState, useEffect } from "react";
import axios from "axios";
import { checkResultErrors } from "ethers/lib/utils";

const Search = () => {
    const [terms, setTerms] = useState('programing');
    const [deboundedTerm, setDeboucedTerm] = useState(terms);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDeboucedTerm(terms);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [terms]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: { 
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: terms
            }});
            setResults(data.query.search);
        }
        if(deboundedTerm){
            search();
        }
        
    }, [deboundedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    
                </div>
            </div>
        );
    })

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
                <div className="ui celled list">
                    {renderedResults}
                </div>
            </div>
            
        );
};

export default Search;