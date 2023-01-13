
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({query,setQuery}) => {
    return (
      <div>
        <form className="search-form">
                <input type="text" className="search" placeholder="Search..."
                    onChange={(e)=>setQuery(e.target.value)} />
          <AiOutlineSearch className="glass" />
        </form>
      </div>
    );
}
 
export default Search;