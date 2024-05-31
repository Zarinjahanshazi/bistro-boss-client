import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`



const UpdateItem = () => {
    const { register, handleSubmit,reset } = useForm();
    const {name,category,recipe,price,_id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
    // console.log(item);

    const onSubmit = async(data) => {
        console.log(data);
        //image upload to imgbb and then get an url
        const imageFile = {image:data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if(res.data.success){
          //now send the menu item data to the server with the image url
          const menuItem ={
            name: data.name,
            category: data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
          }
          //
          const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem);
          console.log(menuRes.data)
          if(menuRes.data.modifiedCount > 0){
            //show success pup up
            // reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is Updated to the menu`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
        console.log('with image url', res.data);
      };
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refresh Info"
            ></SectionTitle>

<div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
            defaultValue={name}
              type="text"
              placeholder="Recipe Name"
              {...register("name", {required:true})}
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select defaultValue={category}
                {...register("category", {required:true})}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* price */}

            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
              defaultValue={price}
                type="number"
                placeholder="Price"
                {...register("price", {required:true})}
                className="input input-bordered w-full "
              />
            </label>

           
          </div>

           {/* recipe details */}
           <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
               
              </div>
              <textarea
              defaultValue={recipe}
               {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
             
            </label>
            <div className="form-control w-full my-6">
            <input  {...register("image", {required:true})} type="file" className="file-input w-full max-w-xs" />
            </div>

          <button className="btn">
            
            Update Menu Item
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;