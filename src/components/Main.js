import React from 'react';
import user_icon from '../media/User_Icon_01c147556c.webp';
import zero_logo from '../media/Zero_Tier_Logo_Inverted_White_73e6fee0b9.webp'; 

const Main = () => {
  return (
    <main>

    <section className="testimonials-section">
        <div className="heading">
            Used by the world's most innovative teams
        </div>
        <div className="testimonial">
            <div className="logo">
                <img src={user_icon} className='profile-picture' alt="user profile" height="40" width="40" />
                
            </div>
            <div className="content">

            
            <div className="statement">
                "Metropolis deploys computer vision in parking lots & car wash facilities across the US, integrating
                ZeroTier to eliminate the complexity of managing multiple, disparate networks to deliver a seamless,
                groundbreaking and world-class customer experience."
            </div>
            <div className="credits">
                TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS
            </div>
            </div>
        </div>
        <div className="testimonial">
            <div className="logo">
                <img src={user_icon} className='profile-picture' alt="user profile" height="40" width="40" />
            </div>
            <div className="content">

            
            <div className="statement">
                "Metropolis deploys computer vision in parking lots & car wash facilities across the US, integrating
                ZeroTier to eliminate the complexity of managing multiple, disparate networks to deliver a seamless,
                groundbreaking and world-class customer experience."
            </div>
            <div className="credits">
                TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS
            </div>
            </div>
        </div>
        <div className="testimonial">
            <div className="logo">
                <img src={user_icon} className='profile-picture' alt="user profile" height="40" width="40" />
            </div>
            <div className="content">

            
            <div className="statement">
                "Metropolis deploys computer vision in parking lots & car wash facilities across the US, integrating
                ZeroTier to eliminate the complexity of managing multiple, disparate networks to deliver a seamless,
                groundbreaking and world-class customer experience."
            </div>
            <div className="credits">
                TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS
            </div>
            </div>
        </div>
    </section>

    <section className="pricing-section">
        <div className="heading">
            Pricing
        </div>
        <div className="sub-heading">
            ZeroTier makes networking easy for everyone - anywhere. 
        </div>
        <div className="pricing-cards">
            <div className="card">
                <div className="logo">
                    <img src={zero_logo} height="64" width="64" className='profile-picture' alt="user profile" />
                </div>
                <div className="heading" >Basic</div>
                <div className="sub-heading"> For everyone</div>    
                <div className="content">
                    <div>✓ 1 Admin</div>
                    <div>✓ 25 Nodes</div>
                    <div>✖ Business SSO: n/a</div>
                    <div>✓ Community Support</div>
                    <div>
                        Free                
                    </div>
                </div>
                
                <div className="footer">
                    <button className="btn-primary">Free Sign Up</button>              
                </div>

            </div>
            <div className="card">
                <div className="logo">
                    <img src={zero_logo} height="64" width="64" className='profile-picture' alt="user profile" />
                </div>
                <div className="heading" >Basic</div>
                <div className="sub-heading"> For everyone</div>    
                <div className="content">
                    <div>✓ 1 Admin</div>
                    <div>✓ 25 Nodes</div>
                    <div>✖ Business SSO: n/a</div>
                    <div>✓ Community Support</div>
                    <div>
                        Free                
                    </div>
                </div>
                
                <div className="footer">
                    <button className="btn-primary">Free Sign Up</button>              
                </div>

            </div>
            <div className="card">
                <div className="logo">
                    <img src={zero_logo} height="64" width="64" className='profile-picture' alt="user profile" />
                </div>
                <div className="heading" >Basic</div>
                <div className="sub-heading"> For everyone</div>    
                <div className="content">
                    <div>✓ 1 Admin</div>
                    <div>✓ 25 Nodes</div>
                    <div>✖ Business SSO: n/a</div>
                    <div>✓ Community Support</div>
                    <div>
                        Free                
                    </div>
                </div>
                
                <div className="footer">
                    <button className="btn-primary">Free Sign Up</button>              
                </div>

            </div>
        </div>
    </section>
    <section className="open-source-section">
        <diV>
            Open Source Community Edition
        </diV>
        <div>
            Featuring unlimited nodes, networks, and admins. Self-hosted. Designed for non-Commercial Use cases.
        </div>
        <div>
            <button>
                ZeroTier GitHub
            </button>
            <div>
                Read Documentation
            </div>
        </div>
    </section>

    <section className="newsletter-section">
        <div>
            <div>Newsletter Signup</div>
            <div>Join over 350,000 community members worldwide and receive the latest news from Team ZeroTier.</div>
        </div>
        <div>
            <form>
                <input type="email"/>
            <button>Signup</button>
            </form>
        </div>
    </section>
    </main>
  )
}

export default Main