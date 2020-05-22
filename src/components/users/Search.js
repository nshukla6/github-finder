import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import {Alert} from '../../components/layout/Alert'


const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const {clearUsers, users} = githubContext;
  const { alert , setAlert } = alertContext;

  const [text, setText] = useState("");

  const onSubmit = (e)=> {
    e.preventDefault();
    if(text === ""){
      setAlert("Please enter something","light");
    }else {
      githubContext.searchUsers(text);
    }
  }
  const onChange = e => setText(e.target.value);
    return (
      <div>
        {alert && <Alert alert={alert} />}
        <form onSubmit={onSubmit} className="form">
          <input 
            type="text" 
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
            />
            <input 
              type="submit"
              value="Search"
              className="btn btn-dark btn-block"
            />
            {users.length>0 && (<button
              onClick={clearUsers}
              className="btn btn-light btn-block">
                Clear
            </button>)}
        </form>
        
      </div>
    )
  }

export default Search
