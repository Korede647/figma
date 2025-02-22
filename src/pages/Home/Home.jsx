import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./home.css"
import Logo from "../../assets/Frame 63.png"
import Icon from "../../assets/save-add.png"
import Profile from "../../assets/profile.png"
import Image from "../../assets/oil.png"
import { IoIosArrowDown } from "react-icons/io";
import Search from "../../assets/Search.png"
import Pipes from '../../components/Props/Pipes'
import Save from "../../assets/Frame 31.png"
import Add from "../../assets/Frame 30.png"

const Home = () => {
  const [state, setState] = useState([])
  const [lga, setLga] = useState([])

  useEffect(() => {
    const fetchData= async () => {
      const response = await axios.get("http://localhost:5000/api/v1/states/") 
      if(response.status === 400){
        setState(response.data)
        // {
          console.log(response.data);
          
        // }
      }else{
        console.log(response.data.message);
        
      }
    }
    fetchData()
  }, [])
  return (
    <div className='homeMain'>

        <nav>
            <div className='navSub'>
              <div className="logo">
                <img src={Logo}/>
              </div>
              <div className="right">
                <button>
                  <h4>Complete Profile</h4>
                </button>
                <div className='icon'>
                  <img src={Icon} />
                </div>
                <div className='profile'>
                  <img src={Profile} />
                </div>
              </div>
            </div>
        </nav>

        <section className='heroSection'>
          <h3 className='hire'>Hire all types of Equipments</h3>
          <div className="search">
            <input type="text" placeholder='Search Equipments' />
            <img src={Search} />
          </div>
          <div className='heroContent'>
            <div className="filter">
              <p>Filter By:</p>
            </div>

            <div className="sects">
              <div className="location">
                  <p>Location</p>
                  <IoIosArrowDown className='icons'  />
              </div>
              <div className="price">
                <p>Price</p>
                <IoIosArrowDown className='icons'  />
              </div>
              <div className="category">
                <p>Category</p>
                <IoIosArrowDown className='icons' />
              </div>
            </div>
          </div>
        </section>

        <section className='list'
        style={{
          backgroundImage: `url(${Image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        >

          <div className="overlay">
              <div className="item">
                <h2>List Your Item on Equipment.ng</h2>
                <h5>Easy to follow steps to list a wide range of construction, agricultural, and industrial equipment. Rent from verified lessors with ease</h5>
                <button>
                List an Equipment
                </button>
              </div>
          </div>
             
        </section>

        <section className='steel'>
            <Pipes Pipe={Add} color= "#FFFFFF"/>
            <Pipes Pipe={Save} color= "#4B5563"/>
            <Pipes Pipe={Add} color= "#FFFFFF"/>
            <Pipes Pipe={Add} color= "#FFFFFF"/>
            <Pipes Pipe={Add} color= "#FFFFFF"/>
            <Pipes Pipe={Add} color= "#FFFFFF"/>
            <Pipes Pipe={Add} color= "#FFFFFF"/>
            <Pipes Pipe={Save} color= "#4B5563"/>
            <Pipes Pipe={Add} color= "#FFFFFF"/>
            <Pipes Pipe={Add} color= "#FFFFFF"/>
        </section>

        <section>
          <select name="" id={state.id} disabled="disabled">
            <option value="">{state.name}</option>
          </select>

          <select name="" id={state.id}>
            <option value="">{state.lgas}</option>
          </select>
          </section>
      
    </div>
  )
}

export default Home
