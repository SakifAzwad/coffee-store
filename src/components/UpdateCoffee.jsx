/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee= useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const hanupd = e=>
    {
        e.preventDefault();
        const form=e.target;

        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const upcof ={name,quantity,supplier,taste,category,details,photo};

        console.log(upcof);

        fetch(`https://coffee-store-server-chi-three.vercel.app/coffee/${_id}`,
        {
          method:'PUT',
          headers:
          {
            'content-type':'application/json'
          },
          body:JSON.stringify(upcof)
        })
        .then(res=>res.json())
        .then(data=>
          {
            console.log(data);
            if(data.modifiedCount)
            {
              Swal.fire(
                'Good job!',
                'Coffee Updated',
                'success'
              )
            }
          })


    }


    return (
        <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-extrabold">Update a Coffee : {name}</h1>
      <form onSubmit={hanupd}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
              name="quantity"
                type="text"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                name="supplier"
                type="text"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
              name="taste"
                type="text"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                name="category"
                defaultValue={category}
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
              name="details"
                type="text"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                name="photo"
                type="text"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input type="submit" value="Update Coffee" className="btn btn-neutral w-full" />
      </form>
    </div>
    );
};

export default UpdateCoffee;