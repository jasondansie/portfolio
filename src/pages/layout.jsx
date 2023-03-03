import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Main from '../components/Main';


const Layout = () => {

    const loading = useSelector((state) => state.user.isLoading);

    return (
        <div className="App">
        {
          loading 
            ? (<Loading />) 
            : (<Main />)
          }
      </div>
    );
};

export default Layout;