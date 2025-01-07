import React from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function DashboardLayout({ children }) {
  return (
    <div>
       <div className='hidden md:block h-screen bg-white fixed mt-[65px] w-64'> 
      <SideNav/>
    </div>
    <div>
      <Header/>
      <div className='md:ml-64 p-10'>
      {children}
      </div>
    </div>
    </div>
  );
}

export default DashboardLayout;
