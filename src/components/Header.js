import React from 'react'

const Header = () => {
  return (
    <header>
    <nav>
        <div className="navbar-brand">
            ZEROTIER
        </div>
        <div className="nav-links">
            <div>Features</div>
            <div>Pricing</div>
            <div>Download</div>
            <div>Company
                <div>
                    <div>Contact</div>
                    <div>About Us</div>
                </div>
            </div>
            <div>Support
                <div>
                    <div>Documentation</div>
                    <div>KnowledgeBase</div>
                </div>
            </div>
        </div>
        <div className="nav-other">
            <div>
                <div>Login</div>
            </div>
            <div>
                <button>Signup</button>
            </div>
        </div>
    </nav>
    <section className="hero-section">
        <div className="hero-section-banner">
            <div className="hero-section-heading">
                Securely connect any device, anywhere.
            </div>
            <div className="hero-section-content">
                ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.
            </div>
            <div>
                <div><button>Get Zerotier</button></div>
                <div>Learn More</div>
            </div>
        </div>
    </section>
</header>
  )
}

export default Header