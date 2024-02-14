import React from 'react'
import Navbar from '@/components/Navbar'
import TitlePage from './title'
import SwapForm from './form'
import Footer from '@/components/footer'


const SwapPage = () => {
  return (
    <>
      <Navbar />

      <TitlePage title="SWAP TRAC" homeText="" homeUrl="" />

      <SwapForm />

      <Footer />
    </>
  );
}

export default SwapPage