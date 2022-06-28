import React, {useEffect, useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineRocket } from "react-icons/ai";
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.element';
import Logo from '../../images/logo.png';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    // BUTTON
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}} >
      <Nav>
        <NavbarContainer>

            <NavLogo to="/">
                <img src={Logo} alt="NeoBit" style={{width: "70px"}}/>  
            </NavLogo>

            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>

                <NavItem>
                    <NavLinks to="/">Home</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/contract">Contract</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/audit">Audit</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/whitepaper">Whitepaper</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/farm">Farm</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/launchpad">Launchpad</NavLinks>
                </NavItem>

                <NavItemBtn>
                    {button ? (
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href='https://exchange.neobit.tech'>
                            <Button primary><AiOutlineRocket /> Launch App</Button>
                        </a>
                    ) : (
                        <NavBtnLink to='/'>
                            <Button fontBig primary><AiOutlineRocket /> Launch App</Button>
                        </NavBtnLink>
                    )}
                </NavItemBtn>
            
            </NavMenu>

        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
