import {Typography} from '@material-ui/core';
import {useEffect, useState} from 'react';

const ContactForm = (props) => {
    
        const initialValues= {
            'name': '',
            'timeOfAdd' : '',
            'dateOfAdd': ''
        
        }
        const [userObj,setUserObj] = useState(initialValues);
        useEffect(()=>{
            if(!props.currentUser) {
                setUserObj({
                    ...initialValues
                })
            }
            else {
                setUserObj({
                    ...props.userObjects[props.currentUser]
                })
            }
        },[props.currentUser, props.userObjects])
    
        const handleOnChange= (e)=>{
            var newDate= new Date();
            var date = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
            var time= newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();
           setUserObj({
               
               name: e.target.value,
               dateOfAdd: date, 
               timeOfAdd: time
           })
           console.log(userObj);
           
         }
    
         const handleClick=(e) =>{
                e.preventDefault();
                props.addOrEdit(userObj);
         }
    
        

    return (  
        <div>
            <Typography variant="h4">Add User</Typography>
            <input  type="text" onChange={handleOnChange} value={userObj.name} />
            <button onClick= {handleClick}> Add User</button>
            
        </div>
       
    );
}
 
export default ContactForm;