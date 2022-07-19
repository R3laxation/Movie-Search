import React from 'react';


type SearchBoxPropsType = {
    value: string
    setSearchValue: (value: string) => void
}

export const SearchBox = ({value, setSearchValue}: SearchBoxPropsType) => {
    return (
        <div className={'col'}>
            <input className='form-control' placeholder='Type to search...' value={value} onChange={(e) => setSearchValue(e.currentTarget.value)}/>
        </div>
    );
};

