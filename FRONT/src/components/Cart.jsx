<<<<<<< HEAD
// import React,{useState} from 'react';
// import { useEffect } from 'react';
// import "../styles/cart.css";

// const Cart = ({cart, setCart, handleChange}) => {
    
// //to do usestate pour les produits //
// //to do useeffect pour fetch produit et mettre a jour le state grace au use state produit//
    
//     const [price, setPrice] = useState(0);

//     const handlePrice = ()=>{
//         let ans = 0;
//         cart.map((item)=>(
//             ans += item.amount * item.price
//         ))
//         setPrice(ans);
//     }

//     const handleRemove = (id) =>{
//         const arr = cart.filter((item)=>item.id !== id);
//         setCart(arr);
//         // handlePrice();
//     }

//     useEffect(()=>{
//         handlePrice();
//     })

//   return (
//     <article>
//         {
//             cart?.map((item)=>(
//                 <div className="cart_box" key={item.id}>
//                     <div className="cart_img">
//                         <img src={item.img} alt='item'/>
//                         <p>{item.title}</p>
//                     </div>
//                     <div>
//                         <button onClick={()=>handleChange(item, +1)}> + </button>
//                         <button>{item.amount}</button>
//                         <button onClick={()=>handleChange(item, -1)}> - </button>
//                     </div>
//                     <div>
//                         <span>{item.price}</span>
//                         <button onClick={()=>handleRemove(item.id)} >Remove</button>
//                     </div>
//                 </div>
//             ))}
//         <div className='total'>
//             <span>Total Price of your Cart</span>
//             <span>Rs - {price}</span>
//         </div>
//     </article>
//   )
// }

=======
// import React,{useState} from 'react';
// import { useEffect } from 'react';
// import "../styles/cart.css";

// const Cart = ({cart, setCart, handleChange}) => {
    
// //to do usestate pour les produits //
// //to do useeffect pour fetch produit et mettre a jour le state grace au use state produit//
    
//     const [price, setPrice] = useState(0);

//     const handlePrice = ()=>{
//         let ans = 0;
//         cart.map((item)=>(
//             ans += item.amount * item.price
//         ))
//         setPrice(ans);
//     }

//     const handleRemove = (id) =>{
//         const arr = cart.filter((item)=>item.id !== id);
//         setCart(arr);
//         // handlePrice();
//     }

//     useEffect(()=>{
//         handlePrice();
//     })

//   return (
//     <article>
//         {
//             cart?.map((item)=>(
//                 <div className="cart_box" key={item.id}>
//                     <div className="cart_img">
//                         <img src={item.img} alt='item'/>
//                         <p>{item.title}</p>
//                     </div>
//                     <div>
//                         <button onClick={()=>handleChange(item, +1)}> + </button>
//                         <button>{item.amount}</button>
//                         <button onClick={()=>handleChange(item, -1)}> - </button>
//                     </div>
//                     <div>
//                         <span>{item.price}</span>
//                         <button onClick={()=>handleRemove(item.id)} >Remove</button>
//                     </div>
//                 </div>
//             ))}
//         <div className='total'>
//             <span>Total Price of your Cart</span>
//             <span>Rs - {price}</span>
//         </div>
//     </article>
//   )
// }

>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
// export default Cart