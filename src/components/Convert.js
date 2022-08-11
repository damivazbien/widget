import React, {useState, useEffect } from "react";
import axios from "axios";

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = axios.post("https://traslation.googleapis.com/language/traslate/v2", {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data[0].translation);
        };
        doTranslation();

        
    }, [language, debouncedText]);

    

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = axios.post("https://traslation.googleapis.com/language/traslate/v2", {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data[0].translation);
        };
        doTranslation();

        
    }, [language, text]);

    return <div>
        <h1 className="ui header">{translated}</h1>
        
    </div>
};

export default Convert;