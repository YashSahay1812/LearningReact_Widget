import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({term, language}) => {

    // API Key :  AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

    const [translation, setTranslation] = useState("");

    useEffect(() => {

        const translate = async () => {
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2",{},{
                params: {
                    q: term,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });
            
            console.log(data);
            setTranslation(data.data.translations[0].translatedText);
        }
        
        const timeoutId = setTimeout(translate, 750);

        return () => clearTimeout(timeoutId);

    },[term, language]);

    return (
        <h3>
            {translation}
        </h3>
    );
}

export default Convert;