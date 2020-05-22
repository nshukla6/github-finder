import axios from 'axios';


const URL = "https://api.github.com/users";
const URL2 = "https://api.github.com/search/users?q=";
export const getUser = async(searchKey) => {
  let url='';
  try{
    url = searchKey ? `${URL2}${searchKey}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    :
    `${URL}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    const users = await axios.get(url);
    return users;
  }
  catch(err){
    console.error(err);
  }
  
}

export const getProfile = async(id) => {
  const url = "https://api.github.com/users/";

  const profile = await axios.get(`${url}${id}`);

  return profile;
}

export const getRepos = async(login) => {
  const url = `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`;
  const repos = await axios.get(url);
  return repos;
}

// https://api.github.com/users

// https://api.github.com/search/users?q=brad

// https://api.github.com/users/bradtraversy

// https://api.github.com/users/bradtraversy/repos