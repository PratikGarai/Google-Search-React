import React from 'react';

import '../css/SearchCard.css';

const SearchCard = (props) => {

    return(
        <div className="result">
            <a className="result__Link" href={props.data.link}>
                {props.data.displayLink} 🔽
            </a> 
            <br />
            <a className="result__Title" href={props.data.link}>
                <span>{props.data.title}</span>
            </a>
            <div className="result__Snippet">
                {props.data.snippet}
            </div>
        </div>
    );
}

export default SearchCard;