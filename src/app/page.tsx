'use client';
import USMap from '../components/USMap';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: '#000080', 
        color: 'white', 
        padding: '1rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo removed from here to be placed in body */}
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Chapters</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Insurance</a>
          <button style={{ 
            backgroundColor: '#B22234', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '4px', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}>Member Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#000080', 
        color: 'white', 
        padding: '60px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '60px', 
          flexWrap: 'wrap' 
        }}>
          <img 
            src="/images/upa-logo.jpg" 
            alt="United Pool Association Logo" 
            style={{ 
              width: '33%', 
              minWidth: '300px', 
              maxWidth: '450px', 
              height: 'auto', 
              borderRadius: '8px',
              objectFit: 'contain' 
            }} 
          />
          <div style={{ 
            textAlign: 'center', 
            flex: 1, 
            minWidth: '400px' 
          }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
              Strengthening the <span style={{ color: '#B22234' }}>Professional</span><br/>
              Standard of Pool Care
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '48px', 
              maxWidth: '800px', 
              marginRight: 'auto',
              marginLeft: 'auto',
              color: '#ddd' 
            }}>
              Connecting independent pool professionals through collective buying power, 
              industry-leading insurance, and a nationwide network of expertise.
            </p>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '60px' }}>
          <button onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ 
            backgroundColor: '#B22234', 
            color: 'white', 
            border: 'none', 
            padding: '15px 30px', 
            borderRadius: '8px', 
            fontSize: '1.1rem', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}>
            Find Your Chapter
          </button>
          <button style={{ 
            backgroundColor: 'white', 
            color: '#000080', 
            border: 'none', 
            padding: '15px 30px', 
            borderRadius: '8px', 
            fontSize: '1.1rem', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}>
            Join the Association
          </button>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ padding: '60px 20px', backgroundColor: '#F3F4F6' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', borderBottom: '5px solid #000080', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ color: '#000080', fontSize: '1.5rem', marginBottom: '10px' }}>Insurance Value</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Access liability coverage tailored for pool professionals at group-negotiated rates.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', borderBottom: '5px solid #B22234', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ color: '#000080', fontSize: '1.5rem', marginBottom: '10px' }}>Buying Power</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Leverage the strength of the association to get better pricing on equipment and supplies.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', borderBottom: '5px solid #000080', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h3 style={{ color: '#000080', fontSize: '1.5rem', marginBottom: '10px' }}>Education</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Stay ahead with the latest technical standards and safety regulations across the US.</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <USMap />
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ 
        padding: '80px 20px', 
        backgroundColor: '#F3F4F6', 
        textAlign: 'center', 
        borderTop: '1px solid #ddd' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: '#000080', fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>
            Ready to Lead Your Local Chapter?
          </h2>
          <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>
            Join a network of professionals dedicated to excellence in pool care. 
            Whether you're starting a new chapter or joining an existing one, your expertise is welcome.
          </p>
          <button style={{ 
            backgroundColor: '#B22234', 
            color: 'white', 
            border: 'none', 
            padding: '18px 40px', 
            borderRadius: '8px', 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            cursor: 'pointer', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            Apply for Membership
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ 
        backgroundColor: '#000033', 
        color: 'white', 
        padding: '60px 20px 30px 20px', 
        fontFamily: 'sans-serif' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          flexWrap: 'wrap', 
          gap: '40px' 
        }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <img 
              src="/images/upa-logo.jpg" 
              alt="UPA Logo" 
              style={{ height: '60px', width: 'auto', marginBottom: '20px', borderRadius: '4px' }} 
            />
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Proudly supporting independent pool professionals nationwide 
              through collective buying power and industry standards.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '60px' }}>
            <div >
              <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</a>
                <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Find a Chapter</a>
                <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Insurance Program</a>
                <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
              </div>
            </div>
            <div >
              <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem' }}>Legal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
                <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '60px', 
          paddingTop: '20px', 
          borderTop: '1px solid #000066', 
          textAlign: 'center', 
          fontSize: '0.85rem', 
          color: '#666' 
        }}>
          © {new Date().getFullYear()} United Pool Association. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
