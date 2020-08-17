import React, { useState } from 'react';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
    
    const [isfocus,setFocus] = useState(false);

    const [inputValue, setInputValue] = useState({
        title: "",
        content: ""
    }); 
    function isClicked() {
        setFocus(true);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        
        setInputValue(prevValue =>{
            return {
              ...prevValue,
              [name]: value
            }
        })
    }
    
    function handleClick(event) {
        props.addItem(inputValue);
        setInputValue({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    
    return (
      <div>
        <form className="create-note">
          {isfocus && (
            <input
              name="title"
              onChange={handleChange}
              value={inputValue.title}
              placeholder="Title"
            />
          )}

          <textarea
            name="content"
            onChange={handleChange}
            value={inputValue.content}
            placeholder="Take a Note..."
            rows={isfocus ? "3" : "1"}
            onClick={isClicked}
          />
           
            <Zoom in={isfocus}>
              <Fab onClick={handleClick}>
                <AddIcon />
              </Fab>
            </Zoom>
          
        </form>
      </div>
    );
}
export default CreateArea;
