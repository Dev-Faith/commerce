
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
    return (
      <div>
        <form className="search-form">
          <input type="text" className="search" />
          <AiOutlineSearch className="glass" />
        </form>
      </div>
    );
}
 
export default Search;