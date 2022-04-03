import React, { useEffect } from 'react';
import styled from 'styled-components';
import PText from './Component/PText';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAbouts } from '../../redux/actions/About';
import { CardMedia, Paper } from '@material-ui/core'
import useStyles from './../Admins/Form/styles'
import { Fade } from 'react-reveal';
import { useTheme } from '@mui/material/styles';
const AboutSectionStyles = styled.div`
  .container {
    margin: 6rem 1.25rem;
    display: flex;
    text-align: center;
    justify-content: flex-start;
    gap: 1rem;
  }
  .about__heading {
    font-size: 1.4rem;
    color: gray;
    font-weight: 900;
    margin: 0px 0px 20px 0px;
  }
  .about__heading span{
    background-color: coral;
    color: white;
    padding: 0.24rem 1rem;
    border-radius: 8px;
  }
  .aboutSection__left {
    padding: 0px 0px 0px 20px;
    flex: 1;
    margin: auto;
  }
  .aboutSection__right {
    flex:1;
    margin: auto;
  }
  .para {
    text-align: justify;
  }
  .aboutSection__buttons{
    margin: 20px 0px;
  }
    .link {  
    text-decoration:none;
    background-color: coral;
    padding: 0.5rem 1rem;
    color: white;
    border-radius:7px;
  }
  @media only screen and (max-width: 1230px) {
    .aboutSection__left {
        margin: auto;
    }
  }
  
  @media only screen and (max-width: 900px) {
    .container {
      margin: 4rem 1.25rem;
      display: flex;
      text-align: center;
      justify-content: flex-start;
      gap: 1rem;
    }
  } 
  @media only screen and (max-width: 750px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__right {
      width: 100%;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: auto;
    }
    .aboutSection__buttons {
      flex-direction: column;
      text-align: center;
      margin-left: 0rem;
      padding:1rem 0 0 1rem;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  const About = useSelector(((state) => state.About))
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    dispatch(getAbouts());
    // by putting the name in [ ] in every update the currentid is change 
  }, [dispatch]);
  return (
    <AboutSectionStyles>
      {About.map((A) => (
        <div className="container" id="place-to-visit" key={A._id}>
          <Fade left>
            <div className="aboutSection__left">
              <Paper elevation={3}
                style={{
                  padding: '1rem 0.3rem',
                  margin: '0 auto',
                  maxwidth: '50%',
                  borderRadius: '12px',
                  [theme.breakpoints.down('sm')]: {
                    padding: '10rem',
                  }
                }}
              >
                <h2 className="about__heading">About <span>{A.Atitle}</span></h2>
                <PText>
                  {A.Amessage.split(' ').splice(0, 60).join(' ')}...
                </PText>
                <div className="aboutSection__buttons">
                  <NavLink className="link" to="/about">Read More</NavLink>
                </div>
              </Paper>
            </div>
          </Fade>
          <Fade right>
            <div className="aboutSection__right">
              <CardMedia className={classes.madia} image={A.AselectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={A.Atitle} />
            </div>
          </Fade>
        </div>

      ))}
    </AboutSectionStyles>
  );
}