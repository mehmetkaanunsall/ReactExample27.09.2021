import React,{useState} from 'react'
import CartSummary from './CartSumary'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'



export default function Navi() {
    const[isAuthenticated, setIsAuthenticated] = useState(false)
    return (
        <div>
            <Menu inverted fixed ="top" >
                <Container>
                    <Menu.Item name='home'/>
                    <Menu.Item name='messages'/>

                    <Menu.Menu position='right'>
                       <CartSummary/>

                    {
                        isAuthenticated? <SignedIn/>:<SignedOut/>
                    }

                        
                       
              
                    </Menu.Menu>
                </Container>

            </Menu> 
        </div>
    )
}