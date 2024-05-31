import FoodCard from "../../../Components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div>

<div className="grid grid-cols-3">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
            </div>
            
        </div>
    );
};

export default OrderTab;