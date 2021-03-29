import React from 'react'

const Footer = () => {
    return (
        <div style={{ 
            position: 'sticky',
            display: 'flex',
            height: '50px',
            backgroundColor: '#101522',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            zIndex: '100',
            bottom: '0'
        }}>
            <p>Designed by MNTC</p>
        </div>
    )
}

export default Footer
