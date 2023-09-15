import React from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../action/action";
import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.reducer.cartData;
  });
  const itemsNames = list.map((element) => {
    return element.name;
  });

  const itemsAndQty = {};
  itemsNames.forEach((element) => {
    itemsAndQty[element] = (itemsAndQty[element] || 0) + 1;
  });

  let keys = Object.keys(itemsAndQty);

  // const imageAndPrice = (obj, arr) => {
  //   const arr1 = [];
  //   for (let i in obj) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (i === arr[j].name) {
  //         arr1.push(arr[j]);
  //         break;
  //       }
  //     }
  //   }
  //   return arr;
  // };
  // let newArrr = imageAndPrice(itemsAndQty, list);

  let newArrr = [];
  Object.keys(itemsAndQty).forEach((element) => {
    for(let i = 0; i < list.length; i++){
      if(element === list[i].name){
        newArrr.push(list[i]);
        break;
      }
    }
  })
  console.log(newArrr);
  let totalPrice = 0;
  list.forEach((element) => {
    totalPrice = totalPrice + element.price;
  });

  return (
    <div>
      <Navbar />
      {(keys.length > 0) ? (<div className="container mt-3">
        <div className="row">
          <div className="col-lg-8">
            {keys.map((element, index) => {
              console.log(index);
              return (
                <div
                  key={index}
                  className="item d-flex flex-sm-row flex-column justify-content-around align-items-center my-3"
                >
                  <div className="">
                    <img
                      src = {newArrr[index].imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="mb-3">{element}</h4>
                    <button
                      className="bg-danger"
                      onClick={() => {
                        return dispatch(
                          removeCart(newArrr[index])
                        );
                      }}
                    >
                      -
                    </button>
                    <input
                      className="text-center"
                      type="text"
                      value={itemsAndQty[element]}
                      disabled
                    />
                    <button
                      className="bg-success"
                      onClick={() => {
                        return dispatch(
                          addCart(newArrr[index])
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="">
                    $
                      {newArrr[index].price * itemsAndQty[element]}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <form className="total-form" action="">
              <h4>
                Total Price:{" "}
                <input type="text" value={"$" + totalPrice} disabled />
              </h4>
              <br />
              <h4>
                GST: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <input
                  type="text"
                  value={"$" + totalPrice * (5 / 100)}
                  disabled
                />
              </h4>
              <br />
              <h4>
                Final Price:{" "}
                <input
                  type="text"
                  value={"$" + (totalPrice + totalPrice * (5 / 100))}
                  disabled
                />
              </h4>
            </form>
          </div>
        </div>
      </div>) : (<h1 style={{textAlign: "center"}}>Please add items in your cart</h1>)}
    </div>
  );
}
