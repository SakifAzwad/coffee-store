import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadeduser=useLoaderData();
    const [user,setuser]=useState(loadeduser);

    const handel = _id =>
  {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`https://coffee-store-server-chi-three.vercel.app/user/${_id}`,
          {
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>
            {
                console.log(data);
                if(data.deletedCount>0)
                {
                    Swal.fire(
                        'Deleted!',
                        'USER has been deleted.',
                        'success'
                      )

                      const rem=user.filter(coof=>coof._id!==_id);
                      setuser(rem);
                }
            })
        }
      })
  }
  
    return (
        <div>
            <h2>Users : {user.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        user.map(user=><tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastAt}</td>
            <td><button onClick={()=>handel(user._id)} className="btn btn-accent">X</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;