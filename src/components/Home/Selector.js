import React, { Fragment } from "react";
import { Select, Box, Heading } from 'grommet';
import SearchMusic from "../Users/MusicSearch";
import SearchMovie from "../Users/MovieSearch";

function Selector() {
    const [value, setValue] = React.useState('movies');
    const [result, setresult] = React.useState('SearchMovie');

    const handleValueChange = (e) => {
        if (e.target.value === 'movies') {
            setresult('SearchMovie');
        } else {
            setresult('SearchMusic');
        }
        setValue(e.target.value);
    };

    return (
        <Fragment>
            <Box fill align="center" justify="start" pad="medium">
                <Heading background="focus" size="small">Find Your Favourite Movie or Song</Heading>
                <Select value={value}
                    options={["movies", "music"]}
                    onChange={handleValueChange}
                />
            </Box>
            {result === 'SearchMovie' ? <SearchMovie /> : <SearchMusic />}
        </Fragment>
    );
}

export default Selector;
