import {Link , Outlet } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>

          <div className="navigation">
         
                <Link to='/'>
                    <div>
                        <img className="logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo"/>
                    </div>
                </Link> 

                
                <Link className="sign-in" to='/papular'> Papular </Link>
                <Link className="sign-in" to='/sign'> Sign in </Link>
                

               
           </div>
           <Outlet />
        </Fragment>
    )
}

export default Navigation;
