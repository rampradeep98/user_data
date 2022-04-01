import React from 'react';
import './Form.css';
const Form = () => {
  return (
    <>
      <div className='formSection'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 '>
              <div className='leftSection'>
                <div className='form'>
                  <div>
                    <h4>Name</h4>
                    <input className='form-control' type='text' />
                  </div>
                  <div className='mt-4'>
                    <h4>Email</h4>
                    <input className='form-control' type='text' />
                  </div>
                  <div className='mt-4'>
                    <h4>Phone No</h4>
                    <input className='form-control' type='number' />
                  </div>
                  <button className='btn btn-block btn text-primary bg-white mt-4'>
                    Save Data
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='rightSection '>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Hr Admin</td>
                      <td>adminhr@mail.com</td>
                      <td>9865232365</td>
                    </tr>
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
