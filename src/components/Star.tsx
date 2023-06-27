import React, { useState, useRef } from 'react';
import { Box} from '@chakra-ui/react';


const Star = (props:any) => {
  

  return (
    <Box opacity="100%" bg="#FFF"zIndex="1" borderRadius="50%" color='white' width="3px" height="3px" position="absolute" top={props.top} left={props.left} >

      
    </Box>
  );
};

export default Star;