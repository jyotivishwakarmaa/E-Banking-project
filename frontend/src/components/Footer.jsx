import React from 'react'

const Footer = () => {
  return (
    <div>
   
    
        <footer className="footer">
            <div className="footer-container">
                <div className="contact-info">
                    <h2>Contact Us</h2><br />
                    <p>Phone: 1800-XXXX-XXXX</p><br />
                    <p>Email: support@bank.com</p><br />
                    <p>Address: Bank, XYZ Street, City, State, Zip</p>
                </div>
                <div className="navigation-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/services">Services</a></li><br />
                        <li><a href="/about">About Us</a></li><br />
                        <li><a href="/faq">FAQs</a></li><br />
                        <li><a href="/support">Customer Support</a></li>
                    </ul>
                </div>
                <div className="legal-info">
                    <h2>Legal</h2>
                    <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li><br />
                     <li><a href="/terms-of-service">Terms of Service</a></li><br />
                    <li>&copy; 2025 Bank. All rights reserved.</li>
                    </ul>
                </div>
                <div className="social-media">
                    <h2>Follow Us</h2>
                    <a href="https://facebook.com/bank" target="_blank" rel="noopener noreferrer">Facebook</a><br /> <br />
                    <a href="https://twitter.com/bank" target="_blank" rel="noopener noreferrer">Twitter</a><br /> <br />
                    <a href="https://instagram.com/bank" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="cta">
                    <h2>Stay Updated</h2>
                    <form>
                        <input type="email" placeholder="Enter your email" required /><br />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
    </div>
  )
}

export default Footer
