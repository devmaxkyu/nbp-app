/** 
 * @description page component to show loading fallback
 * @lastModified 2019.10.4
 * @author zemin
 * */

import React from 'react'


class Loader extends React.Component {
    render() {
        return (
           
                <div className="App-loader">
                    <div>                                       
                        <p>Loading...</p>
                    </div>                    
                </div>          
                     
        )
    }
}

export default Loader