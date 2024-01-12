/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '../../components/Button';
import axios from 'axios';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      setData(response.data);
      setError(null); 
    } catch (error) {
      setData(null);
      setError('Enter a valid username'); 
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-screen ">
      <img
        src="https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"
        className="rounded mt-8 md:mt-0 w-full h-full object-fit"
      />
        <div className="absolute top-0 left-0 w-full h-full flex mt-16 justify-center">
          <div className="text-center text-white">
            <input
              type="text"
              placeholder="Enter Github Username"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Button value="Search" onClick={handleSubmit} />
             {error && (
              <div className="text-red-500 mt-2">{error}</div>
            )}
            {data && ( 
              <div className="mt-10">
                <div className="card w-64 bg-indigo-800 shadow-xl">
                  <figure>
                    <img
                      src={data.avatar_url}
                      alt={`${data.login}'s Avatar`}
                      className='h-28 mt-5'
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title ml-12">
                      {data.name || data.login}
                    </h2>
                    <p>
                      {`Public Repos: ${data.public_repos}`}<br />
                      {`Public Gists: ${data.public_gists}`}<br />
                      {`Profile Created at: ${new Date(data.created_at).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}`}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
