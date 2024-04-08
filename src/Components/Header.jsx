import React from 'react'
import { LogoutBtn, Logo, Container } from './index'

import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const Navitems = [

    {
      name: "Home",
      slug: '/',
      active: true
    }
    , {

      name: "Login",
      slug: " /login",
      active: !authStatus
    }
    , {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus
    }
    , {
      name: "All Post",
      slug: "/allPost",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/Addpost",
      active: authStatus
    }


  ]
  return (
    <header className='py-3 shadow bg-gray-300'>
      <Container>

        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>

              <Logo width='70px' />

            </Link>

          </div>

          <ul className='flex ml-auto'>
            {Navitems.map((item)=> 

            item.active ? (
              <li key={item.name}>
                <button
                onClick={()=> navigate(item.slug)}
                className='inline-block py-6 px-4 duration-200 hover:bg-blue-200 rounded-full'

                >{item.name}</button>
              </li>
            ) : null
            
            )}

            {authStatus && ()}
          </ul>

        </nav>


      </Container>


    </header>
  )
}

export default header