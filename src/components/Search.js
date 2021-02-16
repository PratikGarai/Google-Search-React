import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

import '../css/Search.css'

const Search = ({ hideButtons = false }) => {

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log("Search Button Clicked", e.target.value);
        dispatch({
            type : actionTypes.SET_SEARCH_TERM,
            term : input,
        });
        history.push('/search');
    }

    const handleChange = (e) => {
        // console.log(e);
        setInput(e.target.value);
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={handleChange} />
                <MicIcon />
            </div>
            
            {!hideButtons ? (
                <div className="search__buttons" >
                    <Button type="submit" onClick={search} variant="outlined" >
                        Google Search
                    </Button>
                    <Button variant="outlined">
                        I'm Feeling Lucky
                    </Button>
                </div>
            ):(
                <div className="search__buttonsHidden" >
                    <Button type="submit" onClick={search} variant="outlined" >
                        Google Search
                    </Button>
                    <Button variant="outlined">
                        I'm Feeling Lucky
                    </Button>
                </div>
            )}
        </form>
    )
}

export default Search;