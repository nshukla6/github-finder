import React, {useReducer} from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS
} from '../types';
import {getUser, getProfile, getRepos} from '../../api';


const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }
  const [state, dispatch] = useReducer(GithubReducer,initialState);

  // search user
  const searchUsers = async(v) => {
    setLoading();
    const users = await getUser(v);
    dispatch({
      type: SEARCH_USERS,
      payload:users.data.items
    })
    
}
  // Get repos

  const getRepositories = async(login) => {
    setLoading();
    const repos = await getRepos(login);
    // setRepos(repos.data);
    dispatch({
      type: GET_REPOS,
      payload: repos.data
    })
  }

  // Get user
  const getUserProfile = async(id) => {
    setLoading();
    const user = await getProfile(id);
    dispatch({
      type:GET_USER,
      payload:user.data
    })
    
  }

  // Clear Users
  const clearUsers = () => {
    // setAlert(null);
    // setLoading(false);
    dispatch({
      type: CLEAR_USERS
    })
  }

  // Set loading

  const setLoading = () => dispatch({
    type: SET_LOADING
  })

  return <GithubContext.Provider
          value = {
            {
              users: state.users,
              user: state.user,
              repos: state.repos,
              loading: state.loading,
              searchUsers,
              clearUsers,
              getUserProfile,
              getRepositories
              
            }
          }
      >
        {props.children}
      </GithubContext.Provider>

}

export default GithubState;
