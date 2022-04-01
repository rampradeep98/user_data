import React, { useState } from 'react';
import './Form.css';
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // store a data to old and  new input value " next ....data"
    setData([...data, { name: name, email: email, phone: phone }]);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <>
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
                  <button className='btn btn-block btn text-primary bg-white mt-4'>
                    Save Data
                  </button>
                </form>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='rightSection '>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((singledata, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{singledata.name}</td>
                            <td>{singledata.email}</td>
                            <td>{singledata.phone}</td>
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
    </>
  );
};

export default Form;
