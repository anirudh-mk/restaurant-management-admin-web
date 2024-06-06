import React from 'react'
import Sidebar from '../components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Foods from './Foods'
import DashboardScreen from './DashboardScreen'
import FoodCreateScreen from './FoodCreateScreen'
import FoodDetailsScreen from './FoodDetailsScreen'
function LayoutScreen() {
    return (
        <>
            <Sidebar>
                <Routes>
                    {/* <Route path="dashboard" element={<DashboardScreen />} /> */}
                    <Route path="foods" element={<Foods />} />
                    <Route path='foods/create' element={<FoodCreateScreen />} />
                    <Route path='foods/:id' element={<FoodDetailsScreen />} />
                </Routes>
            </Sidebar>
        </>
    )
}

export default LayoutScreen