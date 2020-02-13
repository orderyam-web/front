import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link} from "react-router-dom";
import checkstyle from './origin.module.css';
import logo from './mark3.png';
import { connect } from 'react-redux';
//import { addMenu } from './store/modules/menuList';
import orderNumber from './orderNumber.js';
import DetailAppBar from './DetailAppBar.js';
class Origin extends Component{
    constructor(props){
        super(props);
    }
   
    
    
    render(){
 
        return(
            <Fragment>
            <DetailAppBar title="원산지 및 사업자 정보"></DetailAppBar>
            <div className={checkstyle.backbox}>
            <div className={checkstyle.companynamebox}>
                상호명</div>
            <div className={checkstyle.companynumber}>
                사업자번호
            </div>
            <div className={checkstyle.wherefrom}>
                원산지정보
            </div>
            <div className={checkstyle.representname}>
                대표자명
            </div>
                
                </div>

            
            </Fragment>
        )
    }
}

const mapStateToProps = ({ menuList}) => ({  //2
    menulist: menuList.list,
    menucount: menuList.totalCount
}) ;

export default connect ( // 스토어와 연결
    mapStateToProps
)(Origin) ;