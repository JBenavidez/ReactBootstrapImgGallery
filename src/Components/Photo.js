import React  from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col,Image } from 'react-bootstrap';

 
function Photo (props){
    const post = props.post
   
    return        <Col   md={4}>
                <div  className="thumbnail" >
                <Image src={post.image} rounded style={{  height: '100px'}} className="img-responsive"/>
                <h3>
                 {post.name}
             </h3>
             <button className="btn btn-danger" onClick={()=>{
                props.onRemovePhoto(post)
            }} > 
                 Remove
             </button>
                </div>
            </Col>  
             
}


 Photo.prototype ={
     post: PropTypes.object.isRequired,
     onRemovePhoto:PropTypes.func.isRequired
 }


export default Photo