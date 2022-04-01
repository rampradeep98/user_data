import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Users = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const api_url = 'https://jsonplaceholder.typicode.com/users';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    // var response = await fetch(api_url, options);
    // var getdata = await response.json();

    // setData(getdata);

    // call api using axios

    const response = await axios.get(api_url);
    setData(response.data);
  }, []);

  return (
    <div className='formSection'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 offset-md-1'>
            <div className='rightSection '>
              <table className='table'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((singledata, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{singledata.name}</td>
                          <td>{singledata.username}</td>
                          <td>{singledata.email}</td>
                          <td>{singledata.phone}</td>
                          <td>{singledata.website}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
