import React from 'react';

import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

import '../css/Result.css';

const Result = (props) => {

    const [{term}, {}] = useStateValue();
    const data = useGoogleSearch(term);

    console.log(data);
    return (
        <div className="search">
            <div className="searchPage__header">

            </div>

            <div className="searchPage__results">

            </div>
            This is result page for : {term}
        </div>
    );
}

export default Result;