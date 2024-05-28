import React from 'react'
import style from '../styles/dashboardScreen.module.css'

function DashboardScreen() {
    return (
        <div>
            <div className={style.topNavbar}>
                <div className={style.topNavbarContainer}>
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardScreen