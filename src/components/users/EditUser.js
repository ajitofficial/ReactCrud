import React , {useState, useEffect} from "react";
import Axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom';

const EditUser = () => {
    
    const navigate = useNavigate();
    const {id} = useParams();
    alert(id);
    const [user, setUser] = useState({
        name: " ",
        username: " ",
        email: " ",
        phone: " ",
        website: " "
    });

    const {name,username,email,phone,website} = user;

    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async e =>{
            e.preventDefault();
            await Axios.post("http://localhost:3001/users",user);
            navigate("/")
    }

    const loadUser = async () =>{
        const result = await Axios.get('http://localhost:3001/users/${id}');
        console.log(result);
    }
    return (
        <div className="container mt-5">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group mb-4">
                        <input type="text" value={name} name="name" onChange={e => onInputChange(e)} class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div class="form-group mb-4">
                        <input type="text" value={username} name="username" onChange={e => onInputChange(e)} class="form-control" placeholder="Enter Username" />
                    </div>
                    <div class="form-group mb-4">
                        <input type="email" value={email} name="email" onChange={e => onInputChange(e)} class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group mb-4">
                        <input type="text" value={phone} name="phone" onChange={e => onInputChange(e)} class="form-control" placeholder="Enter Contact" />
                    </div>

                    <div class="form-group mb-4">
                        <input type="text" value={website} name="website" onChange={e => onInputChange(e)} class="form-control" placeholder="Enter Website" />
                    </div>

                    <button type="submit" class="btn btn-primary">Edit User</button>
                </form>

            </div>

        </div>

    )
}

export default EditUser;