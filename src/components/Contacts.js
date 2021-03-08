import {Grid} from '@material-ui/core';
import ContactForm from './ContactForm';
import firebaseDb from '../Firebase';
import {useEffect,useState} from 'react';




const Contacts = () => {
    var [userObjects, setUserObjects] = useState({});
    var [currentUser, setCurrentUser] = useState('');
    useEffect(()=>{
        firebaseDb.child('users').on('value', snapshot=>{
            if(snapshot.val()!=null){
                setUserObjects({
                    ...snapshot.val()
                })     
                


            }
        })
    },[]);

    const  addOrEdit = obj =>{
        if(!currentUser){
        firebaseDb.child('users').push(obj,
            err=> {
                if (err)
                    console.log(err);
                else 
                    setCurrentUser('');
            }
        )
        }
        else{
            firebaseDb.child(`users/${currentUser}`).set(obj,
                err=> {
                    if(err)
                        console.log(err);
                    else 
                    setCurrentUser('');
                }
            )
        }
    
    }
    const handleDelete=key =>{
        firebaseDb.child(`users/${key}`).remove(
            err=> {
                if(err)
                    console.log(err);
                else 
                setCurrentUser('');
            }
        )
    }
    
    return ( 
            <Grid container>
                <Grid item md={5}>
                    <ContactForm { ...({addOrEdit,currentUser,userObjects})} />
                </Grid>
                <Grid item md={7}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                 <th>Time</th>
                                 <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                Object.keys(userObjects).reverse().map(id =>{
                                    
                                    
                                    return <tr key={id}>
                                        <td> {userObjects[id].name}</td>
                                        <td> {userObjects[id].dateOfAdd}</td>
                                        <td> {userObjects[id].timeOfAdd}</td>
                                        <td><button onClick={()=> {setCurrentUser(id)}}>Edit</button> <button onClick={()=>handleDelete(id)}>Delete</button></td>

                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </Grid>
            </Grid>
       
     );
}
 
export default Contacts;