import React from 'react';
import Createposts from '../components/Createposts';
import Posts from '../components/posts';
import { useSelector,useDispatch } from 'react-redux';

const Main = () => {
  const data = useSelector(state => state.post)
  return <div>
      <div className='mt-10 mb-10'>
        <Createposts/>
        {
          data.map((item) => {
            return <Posts name={item.name} desc={item.desc} url={item.url}/>
          })
        }
      </div>
  </div>;
};

export default Main;
