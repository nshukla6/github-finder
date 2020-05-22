import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos';

import GithubContext from '../../context/github/githubContext';


const User = ({match}) => {

  const githubContext = useContext(GithubContext);
  const {user, getRepositories, repos, getUserProfile } = githubContext;
  const { 
    name,
    avatar_url,
    company,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;
  useEffect(()=> {
    getUserProfile(match.params.login);
    getRepositories(match.params.login);
    // eslint-disable-next-line
  },[]);
  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable: {" "}
      {
        hireable ? <i className="fa fa-check text-success"></i>
        : <i className="fa fa-times-circle text-danger"></i>
      }
      <div className="card grid-2">
        <div className="all-center">
          <img 
            src={avatar_url}
            className="round-img"
            alt=""
            style={{width:'100px'}}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && <>
            <h3>Bio</h3>
            <p>{bio}</p>
          </>}
          <a className="btn btn-dark my-1" href={html_url}>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {
                login && <>
                  <strong>Username: </strong>{login}
                </>
              }
            </li>
            <li>
              {
                company && <>
                  <strong>Company: </strong>{company}
                </>
              }
            </li>
            <li>
              {
                blog && <>
                  <strong>Website: </strong>{blog}
                </>
              }
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  )
}

export default User
