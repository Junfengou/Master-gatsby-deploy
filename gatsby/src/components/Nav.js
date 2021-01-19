import React from 'react'
import styled from "styled-components"
import Logo from "../components/Logo"
import { Link } from "gatsby" //HTML5 push state (regular anchor tag will refresh the page)
/*
    Declarative link: declare how it work
    Impairative Link: write the code as a result of something else happened (form submission)
*/

function Nav() {
    return (
        <NavStyles>
            <ul>
                <li><Link to="/">Hot now</Link></li>
                <li><Link to="/pizza">Pizza Menu</Link></li>
                <li className="logo-item"><Link to="/"><Logo /></Link></li>
                <li><Link to="/slicemasters">Home Slice Bois</Link></li>
                <li><Link to="/order">Order Ahead!</Link></li>
            </ul>
        </NavStyles>
    )
}

const NavStyles = styled.nav`
    /* margin-bottom: 3rem; */

    .logo {
        transform: translateY(-25%)
    }

    ul {
        margin: 0;
        padding: 0;
        text-align: center;
        list-style: none;
        margin-top: -6rem;

        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-gap: 2rem;
        align-items:center;
    }

    li {
        --rotate: -2deg;
        transform: rotate(var(--rotate));
        order: 1;

        &:nth-child(1) //grabbing the first item
        { 
            --rotate: 1deg;
        }

        &:nth-child(2) //grabbing the first item
        { 
            --rotate: -2.5deg;
        }

        &:nth-child(4) //grabbing the first item
        { 
            --rotate: 2.5deg;
        }
        &:hover {
            --rotate: 5deg;
        }
    }

    a {
        font-size: 3rem;
        text-decoration: none;
        display: block;
        &:hover{
            color: var(--red)
        }
        &[aria-current="page"] {
            color: var(--red)
        }
        @media(max-width: 800px)
    {
        font-size: 2rem;
    }
}
@media(max-width: 600px)
{
    --column: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
        grid-template-rows: auto auto;
        grid-template-columns: repeat(var(--column), 1fr);
        justify-items: center;
    }
    .logo-item {
        order: 0;
        grid-column: 1 / -1;
    }
    .logo {
        transform: none;
    }
}

@media(max-width: 500px)
{
    --column: 2;
}
     
`


export default Nav
