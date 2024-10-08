import React from 'react';



const SearchBox = (props) => {
    return (
    <div>
        <input type="search" 
        className='pa3 ba b--green bg-lightest-blue'
        placeholder= 'Enter musicsheet '
        onChange = {props.onSearch}
         />  
    </div>
       
    );
}

export default SearchBox;