import React from 'react'
import "./pipes.css"
import PipeOil from "../../assets/Frame 30.png"

const Pipes = (props) => {
  return (
    <div className='pipes'> 
    <div className='imageP'
   style={{
             backgroundImage: `url(${props.Pipe})`,
             backgroundPosition: "top",
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover"
           }}>
              {/* <div className="imgI"
              style={{
                backgroundColor: `${props.color}`
              }}>
                  <img src={props.imgPipe}/>
              </div> */}
            
    </div>

    <div className="textDiv">

      <div className="comb">
      <div className="first">
        <h6>2,500,000.00</h6>
        <p>per day</p>
      </div>

      <div className="second">
        <h6>Steel Pipelines Cables</h6>
      </div>
      </div>

      <div className="third">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,</p>
      </div>

      <div className="fourth">
        <p>Available: Immediately</p>
      </div>

    </div>
    </div>
  )
}

export default Pipes
