import { Container, CssBaseline, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import Image from 'next/image';
import banner from '../../../Assets/banner-image-1-1.png'
// import './banner.css'




const Banner = () => {
    return (
        <div className='container'>
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ bgcolor: '#fff', height: '100vh' }} >
        <Grid className=' d-flex justify-content-around align-items-center' container spacing={2}>
        <Grid className=' d-flex justify-content-center align-items-center ml-5' item lg={5} xs={12} sm={12}>
            
            <div></div>

            <Box sx={styles.content}> 
            <div>
            {/* <div as="h3">
              AGRO<span style={{color: '#063340'}}>VERSE</span>
            </div> */}
            <h1 style={{fontSize: "100px"}} > <span style={{color: 'green'}}>AGRO</span><span style={{color: '#063340'}}>VERSE</span></h1>
            <h5>Best Quality of food Products</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis hic dolor nihil vitae provident <br />, necessitatibus a odio beatae cupiditate id eos ducimus dolores asperiores quidem nemo distinctio saepe ullam? Pariatur?</p>
       
            </div>

             </Box>
          
           
         </Grid>
        <Grid item lg={7} xs={12} sm={12}>
          
            <Image
      alt="banner"
      src={banner}
      layout="intrinsic"
      width={900}
      height={700}
    />
        </Grid>
        </Grid>
        </Box>
        </Container>
    </React.Fragment>
        </div>
    );
};

export default Banner;


const styles = {
    banner: {
      pt: ['110px', null, null, null, '150px', '200px'],
      pb: ['50px', null, null, null, '60px', null, '0'],
      backgroundColor: '#F6F8FB',
      overflow: 'hidden',
    },
    container: {
      width: [null, null, null, null, null, null, '1390px'],
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      gridGap: '0',
    },
    content: {
      h3: {
        color: '#008000',
        fontWeight: 'bold',
        lineHeight: [1.39],
        letterSpacing: ['-.7px', '-1.5px'],
        mb: ['15px', null, null, null, '20px'],
        width: ['100%'],
        maxWidth: ['100%', null, null, '90%', '100%', '540px'],
        // fontSize: [3, null, null, '36px', null, '55px', 9],
        fontSize: "200px",
        marginTop: '45px'
      },
      p: {
        fontSize: [1, null, null, 2, null, 3],
        lineHeight: ['26px', null, null, null, 2.33],
        color: 'text_secondary',
        mb: ['20px', null, null, null, null, '30px'],
        width: ['100%'],
        maxWidth: ['100%', null, null, null, null, '410px'],
        br: {
          display: ['none', null, null, null, 'inherit'],
        },
      },
    },
    form: {
      mb: ['30px', null, null, null, null, '60px'],
      display: ['flex'],
      input: {
        borderRadius: ['4px'],
        backgroundColor: '#fff',
        width: ['240px', null, null, null, '315px', null, '375px'],
        height: ['45px', null, null, '55px', null, null, '65px'],
        padding: ['0 15px', null, null, '0 25px'],
        fontSize: [1, null, null, 2],
        border: 'none',
        outline: 'none',
        boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      },
      button: {
        fontSize: [1, null, null, null, 2, '20px'],
        borderRadius: ['4px'],
        padding: ['0 15px'],
        ml: ['10px'],
        width: ['auto', null, null, null, '180px'],
      },
    },
    image: {
      img: {
        display: 'flex',
        mixBlendMode: 'darken',
        position: 'relative',
        top: ['0', null, null, null, null, '-70px'],
        maxWidth: ['100%', null, null, null, null, null, '900px'],
      },
    },
    partner: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      mb: ['40px'],
      '> div + div': {
        ml: ['10px', null, null, '20px', null, '30px'],
      },
      img: {
        display: 'flex',
      },
      span: {
        fontSize: [1, null, null, null, 2],
        color: '#566272',
        lineHeight: [1],
        opacity: 0.6,
        display: 'block',
        mb: ['20px', null, null, null, '0px'],
        mr: [null, null, null, null, '20px'],
        flex: ['0 0 100%', null, null, null, '0 0 auto'],
      },
    },
  };