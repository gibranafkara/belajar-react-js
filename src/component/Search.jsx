import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");

    const changeSearch = () => {
        props.onChangeSearch(search)
    }

    const searchKeyDown = (e) => {
        if (e.key === 'Enter') {
            changeSearch()
        }
    }

    return (
        <>
            <div>Cari Artikel : <input type="text" onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeyDown} /></div>
            <button onClick={changeSearch}>Submit</button><br />
            <small>
                {props.totalPost} Data yang ditemukan dengan kata {search}
            </small>
        </>
    )

}

export default Search