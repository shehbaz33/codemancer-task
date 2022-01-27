import React from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';
import Oldpost from '../data';
import { useSelector,useDispatch } from 'react-redux';
import { updatePost } from '../redux/postSlice';

const Createposts = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [isLoading, setisLoading] = React.useState(false);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [data,setdata] = React.useState([]);
    const [gifid,setgifid] = React.useState('');
    const [specificgif,setspecificgif] = React.useState('');
    const [post,setpost] = React.useState('');
    const [trending,settrending] = React.useState([]);
    const [search,setsearch] = React.useState('');

    const dispatch = useDispatch();

    const fetchData = async (e) => {
      setisLoading(true)
        e.preventDefault()
        const results = await axios("https://api.giphy.com/v1/gifs/search",{
            params:{
                api_key: "U6tKl1PA3wqA19r5uI3Tuf60ZRmuNTR0",
                limit:3,
                q: search
            }
        });
        setisLoading(false)
        setdata(results.data.data)
    }

    const getGif = async () => {
      setisLoading(true)
      const results = await axios('https://api.giphy.com/v1/gifs/trending',{
          params:{
              api_key: "U6tKl1PA3wqA19r5uI3Tuf60ZRmuNTR0",
              limit:3,
          }
      });
      setisLoading(false)
      setdata(results.data.data)
    }

    console.log(data)
    React.useEffect(() => {
       getGif()
    },[]);

    const getSpecificGif = async (id) => {
      setisLoading(true)
      const results = await axios(`https://api.giphy.com/v1/gifs/${id}`,{
          params:{
              api_key: "U6tKl1PA3wqA19r5uI3Tuf60ZRmuNTR0",
          }
      });
      setisLoading(false)
      setspecificgif(results.data.data);
    }

    const updatedPost = {
      name:'random',
      desc:post,
      url:(specificgif ? specificgif.images.fixed_height.url :'No available')
    }

    const makePost = () => {
      dispatch(updatePost(updatedPost))
      setShowModal(false)
    }


  return <div className='flex justify-end mx-auto container'>
      <button
        className="bg-blue-800 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Posts
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create Post
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='flex items-center justify-between p-4'>
                    <div className='rounded-full h-12 w-12'>
                        <img src="https://media4.giphy.com/media/3o6Zt481isNVuQI1l6/200.gif?cid=a171e4016lcgidmakv7kmf2wrnhqjxjs849v4hzdunpyvn0k&rid=200.gif&ct=g" alt="" className='rounded-full h-12 w-12' />
                    </div>
                    <div className="p-5">
                    <input type="text" name="post" id="post" className='border-2 border-gray-200 rounded-md p-5' 
                    placeholder='Provide your message here'
                    onChange={(e) => setpost(e.target.value)}
                    />
                    </div>
                </div>
                <div className='flex item-center justify-center'>
                  {
                    specificgif ? (
                      <img src={specificgif.images.fixed_height.url} alt="" className='h-20 w-20' />
                    ) : null
                  }
                </div>
                <div className='bg-gray-200 rounded-md flex justify-center mx-20 my-2 p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <button onClick={() => setShowDropdown(true)}>GIF</button>
                </div>
                <div>
                {
                  showDropdown && !isLoading ? (
                    <div className='flex item-center flex-col h-full'>
                      <div>
                        <input type="text" name="" id="" placeholder='search' 
                        className='border-2 solid rounded-md p-2'
                        onChange={(e) => setsearch(e.target.value)}
                        />
                        <button className='bg-blue-600 text-white rounded-md px-3 py-2' onClick={fetchData}>Search</button>
                      </div>
                      <div className='flex items-center justify-center'>
                      {
                        data.map((item) => (
                          <div className='flex item-center justify-center flex-row'>
                            <img src={item.images.fixed_height_small.url} alt="" srcset="" className='w-20 h-20 cursor-pointer'
                            onClick={() => getSpecificGif(item.id)}
                            />
                          </div>
                        ))
                      }
                      </div>
                    </div>
                  ): <h1>Loading...</h1> }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={makePost}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
  </div>;
};

export default Createposts;
