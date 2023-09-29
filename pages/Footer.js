
import React from "react";
import styles from "../styles/style.css";



const Footer = () => {
    return (
        <>
            <footer className="joey-footer">
                <div className="container-space">

                    <article className="joey-footer-socialmediaicons">
                    <p>© {new Date().getFullYear()}</p>
                        <h4 className="itess-footer-title">Social Media</h4>
                        <a className='social-icon-link facebook' href="https://www.instagram.com/joeyvelichkov/" aria-label='Instagram'><i className='fab fa-instagram' /></a>
                        <a className='social-icon-link facebook' href="https://www.linkedin.com/in/joey-velichkov-44936bb0/" aria-label='Linkedin'><i className='fab fa-linkedin-in' /></a>
                    </article>
                </div>
            </footer>
        </>
    )
}

export default Footer


