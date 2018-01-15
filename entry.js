require('./less/main.less');
'use strict'

import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
    <div className="myDiv">
        <div className="paneLeft">l</div>
        <div className="paneRight">r</div>
        <div style={{
                width:"100%", 
                backgroundColor:"white", 
                position:"absolute",
                bottom:0,
                height:"100px"
            }} className="paneBottom">
            b
        </div>
    </div>,
    document.getElementById('content')
)