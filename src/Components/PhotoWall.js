import React  from 'react';

import Photo from './Photo'

import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

function PhotoWall(props){

    return <Grid className="show-grid">
           <Row>
           {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto ={props.onRemovePhoto}/>) }
           </Row>
            </Grid>

}


PhotoWall.prototypes ={
    posts: PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isReq
}
 

export default PhotoWall