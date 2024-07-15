import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/JEE.jpeg";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search For Products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={prod} alt="Product" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Search;
