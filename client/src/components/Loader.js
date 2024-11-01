import React, { useState } from 'react';
import PuffLoader from "react-spinners/PuffLoader"; 
import { css } from '@emotion/react';

function Loader() {
    let [loading, setLoading] = useState(true);
    
    return (
        
        <div style={{marginTop: '150px', marginLeft:'50%' }}>
            <div className="sweet-loading " >
                <PuffLoader
                    color='#000'
                    loading={loading}
                    css=''
                    size={80}
                />
            </div>
        </div>
    );
}

export default Loader;