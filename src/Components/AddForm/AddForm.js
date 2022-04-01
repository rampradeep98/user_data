import axios from 'axios';
import React, { useState } from 'react';

const AddForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      name: name,
      email: email,
      phone: phone,
      website: website,
      username: username,
    };
    const api_url = 'https://jsonplaceholder.typicode.com/users';
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // };

    // fetch(api_url, options);

    // post method using axios

    const response = await axios.post(api_url, body);

    if (response) {
      alert('stored');
    }
  };

  return (
    <div className='formSection'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4 '>
            <div className='leftSection'>
              <form className='form' onSubmit={(e) => submitHandler(e)}>
                <div>
                  <h4>Name</h4>
                  <input
                    className='form-control'
                    value={name}
                    type='text'
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <h4>Username</h4>
                  <input
                    className='form-control'
                    value={username}
                    type='text'
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='mt-4'>
                  <h4>Email</h4>
                  <input
                    className='form-control'
                    value={email}
                    type='text'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mt-4'>
                  <h4>Phone No</h4>
                  <input
                    className='form-control'
                    value={phone}
                    type='text'
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className='mt-4'>
                  <h4>Website</h4>
                  <input
                    className='form-control'
                    value={website}
                    type='text'
                    required
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <button className='btn btn-block btn text-primary bg-white mt-4'>
                  Save Data
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
