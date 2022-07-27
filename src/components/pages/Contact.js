import React from 'react';
const Contact = () => {
    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Contact</h1>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="staticEmail" value="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" />
                    </div>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </div>
        </div>
    )
}

export default Contact;