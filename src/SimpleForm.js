
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Rating from "./Rating";
import EnduranceCycle from './EnduranceCycle';
import './App.css';
import { ThemeProvider } from 'styled-components';


class SimpleForm extends Component {

    render() {
      const theme =  {
        
        fontFamily: '',
        headerBgColor: 'rgb(0, 0, 153)',
        headerFontColor: 'white',
        headerFontSize: '15px',
        botBubbleColor: 'rgb(0, 0, 153)',
        botFontColor: 'white',
        userBubbleColor: 'rgb(0, 0, 153)',
        
    }
      return (
        <ThemeProvider theme={theme}>
<ChatBot 
headerTitle='My Review'
         recognitionEnable={true}
        //speechSynthesis={{ enable: true, lang: 'en' }}
          steps={[
            { 
              id: '1',
              message: 'Hi AK, Kindly provide rating to your recent purchase.',
              trigger: 'name',
              delay:3000
            },
            {
              id: 'name',
              message:'Product Details: Nike shoes',
              delay:1000,
              trigger: '2',
            },
            {
              id: '2',
              message: 'Date of purchase: 29-01-2021',
              delay:1000,
              trigger: 'category',
            },
            {
              id: 'category',
            component:(<Rating/>),
            delay:1000,
            trigger:'Other'
            },
            {
              id: 'Other',
              delay:4000,
     message: 'Are you willing to provide Review for the product?',
     
              trigger:'show'
            },
            {
              id:'show',
              options: [
                { value:'Yes', label: 'Yes', trigger: 'Yes' },
                {value:'No',  label: 'No', trigger: 'No' },
               
              ],
            },
            {
              id:'No',
              message:'Thankyou for valueable feedback, Please press Done button',
              // trigger:'ratingSubmit'
            },
            // {
            //   id:'ratingSubmit',
            //   component:(<button style={{background:'blue',color:'white'}}>Submit</button>)
            // },

            {id:'Yes',
            message:'Please Provide a nickname!',
           
          trigger:'nickname'},
          {
            id:'nickname',
            user:true,
            trigger:'next'
          },
            {
              id:'next',
              message:'Hi {previousValue}! Please provide your valueable review about the product',
              trigger:'btn'
            },

            {
              id:'btn',
              component:(<div>
                <textarea style={{width:'100%'}}></textarea>
              </div>),
              
    trigger:'msg'
            },
           
            {
              id:'msg',
              delay:3000,
              message:'Thankyou for the review, Would you like to answer few more questions? ',
             trigger:'fdk'
             
            
            },
            {id:'fdk',
            options:[
              { value:'Yes', label: 'Yes', trigger: 'frnd' },
              {value:'No',  label: 'No', trigger: 'NoRec' },
            ],},
            {
              id:'NoRec',
              message:'Thankyou for valueable feedback, Please press submit button',
              // trigger:'ratingSubmit'
            },
            {id:'frnd',
          message:'Would you recommend this product to your friend?',
          trigger:'recomnd'
        },
          {
            id:'recomnd',
            options: [
              { value:'Yes', label: 'Yes',trigger:'prefinal'},
              {value:'No',  label: 'No',trigger:'prefinal'},
             
            ],
          },
          {
            id:'prefinal',
            message:'Would you recommend Endurance Cycles to a friend?',
            trigger:'lastQ'
          },
          {
            id:'lastQ',
            component:<EnduranceCycle></EnduranceCycle>,
            trigger:'final'
          },
          {
            id:'final',
            delay:3000,
            message:'Thankyou for valueable feedback, Please press submit button',
            //trigger:'ratingSubmit'
          }
           
           
          ]}
        />
        </ThemeProvider>
      );
    }
  }

  export default SimpleForm;
