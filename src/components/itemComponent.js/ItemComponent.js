import React from 'react'
import { addCart, removeCart } from "../../action/action";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ItemComponent(props) {
  const dispatch = useDispatch();
  return (
    <div className="container">
        <h1 className="text-center my-3">
          {props.heading}
        </h1>
        <div className="row">
          {props.data.map((element) => {
            return (
              <div key={element.name} className="col-lg-3 col-md-6">
                <div className="card align-items-center">
                  <img
                    src={element.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">${element.price}</p>
                    <Link
                      className="btn btn-primary"
                      onClick={() => {
                        return dispatch(addCart(element));
                      }}
                    >
                      Add To Cart
                    </Link>
                    <br />
                    <Link
                      className="btn btn-danger my-1"
                      onClick={() => {
                        return dispatch(removeCart(element));
                      }}
                    >
                      Remove To Cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  )
}
