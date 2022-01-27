import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Giphy = () => {
const [data,setdata] = useState([])
const [search,setsearch] = useState("")
const [message,setmessage] = useState("")

const fetchData = async (e) => {
    e.preventDefault()
    const results = await axios("https://api.giphy.com/v1/gifs/search",{
        params:{
            api_key: "U6tKl1PA3wqA19r5uI3Tuf60ZRmuNTR0",
            limit:10,
            q: search
        }
    });
    setdata(results.data.data)
}


    // const fetchData = async () => {
    //     const results = await axios("https://api.giphy.com/v1/gifs/search",{
    //         params:{
    //             api_key: "U6tKl1PA3wqA19r5uI3Tuf60ZRmuNTR0",
    //             limit: 20,
    //             q:search
    //         }
            
    //     });
     
    

  return <div>
      <div>
          <form action="">
              <input type="text"
               name="message"
               id="message"
               onChange={(e) => setmessage(e.target.value)}
               />
               <button>post</button>
          </form>
          <form action="submit">
              <input type="text" 
              name="search" 
              id="search"
              onChange={(e) => setsearch(e.target.value)}
              />
              <button onClick={fetchData}>Search</button>
          </form>
          <div>
          {
              data.map((el) => {
                  return(
                      <>
                        <h1>{el.id}</h1>
                        <img src={el.images.fixed_height.url} alt="" />
                      </>
                  )
              })
          }
          </div>
      </div>
      <h1>This is the first component</h1>
  </div>;
};

export default Giphy;
