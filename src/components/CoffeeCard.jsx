/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee ,cof,setcof }) => {
  const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
  
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

          fetch(`https://coffee-store-server-chi-three.vercel.app/coffee/${_id}`,
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
                        'Your Coffee has been deleted.',
                        'success'
                      )

                      const rem=cof.filter(coof=>coof._id!==_id);
                      setcof(rem);
                }
            })
        }
      })
  }
  
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
        <h2 className="card-title">Name : {name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn btn-secondary">View</button>
            <Link to={`updatecoffee/${_id}`}>
            <button className="btn btn-primary">Edit</button>
            </Link>
            <button onClick={()=>handel(_id)} className="btn btn-accent">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
