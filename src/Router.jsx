import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import CompanyOverview from './pages/CompanyOverview'
import JobOpportunity from './pages/JobOpportunity'
import News from './pages/News'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Service from './pages/Service/Service'
import ServiceDownloadPdf from './pages/Service/ServiceDownloadPdf'
import ServiceOverview from './pages/Service/ServiceOverview'
import SolutionApplication from './pages/Solution/SolutionApplication'
import SolutionOverview from './pages/Solution/SolutionOverview'
const Router = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/AboutUs' element={<AboutUs/>} />
                <Route path='/ContactUs' element={<ContactUs/>} />
                <Route path='/CompanyOverview' element={<CompanyOverview/>} />
                <Route path='/JobOpportunity' element={<JobOpportunity/>} />
                <Route path='/News' element={<News/>} />
                <Route path='/Product' element={<Product/>} />
                <Route path='/ProductDetail' element={<ProductDetail/>} />
                <Route path='/Service' element={<Service/>} />
                <Route path='/ServiceDownloadPdf' element={<ServiceDownloadPdf/>} />
                <Route path='/ServiceOverview' element={<ServiceOverview/>} />
                <Route path='/SolutionApplication' element={<SolutionApplication/>} />
                <Route path='/SolutionOverview' element={<SolutionOverview/>} />
            </Routes>
            
        </>
    )
}
export default Router