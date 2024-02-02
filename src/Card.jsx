import './Card.css'
function Card() {
  return (


    <div className="col1">
      <img src="logo192.png" alt="React img" srcset="" className='col_img' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi blanditiis aliquid est harum facere, tempora ullam aut provident quod omnis illum tenetur, sed et veniam magnam natus culpa sunt ratione consequuntur perferendis? Molestias, aperiam.</p>
      {/* <button><a className='a' href='#s'>Click Me</a></button> */}
      <MyComponent />
    </div>



  );
}
const MyComponent = () => { const sayHello = () => { alert("Hello!"); }; return (<button onClick={sayHello}>Say Hello</button>); };
export default Card;