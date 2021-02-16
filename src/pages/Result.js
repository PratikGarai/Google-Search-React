import React from 'react';

import { useStateValue } from '../StateProvider';

import '../css/Result.css';

const Result = (props) => {

    const [state, {}] = useStateValue();

    return (
        <div className="search">
            This is result page for : {state.term}
        </div>
    );
}

export default Result;