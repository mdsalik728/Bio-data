import React, { useState, useRef, useEffect } from 'react';
import './Biopage.css';

// Importing all 10 assets
import img1 from './assets/1.jpeg';
import img3 from './assets/s2.jpeg';
import img5 from './assets/5.jpeg';

import img2 from './assets/s.jpeg';
import img10 from './assets/10.jpeg';

const BioPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const scrollRef = useRef(null);
  const photos = [img1, img2, img3, img5,img10];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      // Trigger slightly before the item hits the bottom to feel more responsive
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Remove the class when out of view so it animates back in when scrolling in any direction
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-zoom'
    );
    animatedElements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dark-theme-wrapper">
      <div className="fixed-bg">
        {/* Animated Ambient Background Elements */}
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
      
      <div className="bio-container">
        
        {/* Header Section */}
        <header className="bio-header reveal-zoom">
          <h1 className="animated-name">MD SALIK</h1>
          <p className="subtitle reveal delay-200">Personal Bio-Data</p>
        </header>

        {/* Details Section - Placed ABOVE Gallery */}
        <section className="details-content">
          
          <div className="detail-group reveal-left delay-100">
            <h3 className="bold-heading">Personal Details:</h3>
            <p><strong>Date-of-birth :</strong> 08-09-2000</p>
            <p><strong>Place of birth :</strong> Dhanbad, Jharkhand</p>
            <p><strong>Height :</strong> 5 foot 9 inch (175.5 cm)</p>
            <p><strong>Religion :</strong> Islam</p>
            <p><strong>Aqeedah :</strong> Salafi (Ahle-Hadith)</p>
            <p><strong>Complexion :</strong> Fair</p>
          </div>

          <div className="detail-group reveal-right delay-200">
            <h3 className="bold-heading">Educational Details:</h3>
     
            <p><strong>Graduation :</strong> Bsc(hons) Physics, JAMIA MILLIA ISLAMIA</p>
            <p><strong>Post Graduation :</strong> Master of Computer Application(MCA), JAMIA MILLIA ISLAMIA (final year)</p>
          </div>

          <div className="detail-group reveal-left delay-300">
            <h3 className="bold-heading">Family Details:</h3>
            <p><strong>Father's Name :</strong> MD KHALID HUSSAIN</p>
            <p><strong>Father's Occupation :</strong> Business</p>
            <p><strong>Mother's Name :</strong> ANWARI KHATOON</p>
            <p><strong>Mother's occupation :</strong> Homemaker</p>
            <p><strong>Sibling :</strong> Elder sister (Married)</p>
          </div>

          <div className="detail-group reveal-right delay-400">
            <h3 className="bold-heading">Contact Details:</h3>
            <p><strong>Phone Number :</strong> 7281026680</p>
              

            <p><strong>Email :</strong> mdsalikdns@gmail.com</p>
            <p><strong>Address :</strong> Lower Rajbari Road, Jharia, Dhanbad, Jharkhand-828111</p>
          </div>
        </section>

        {/* Gallery Section - Placed BELOW Details */}
        <section className="gallery-wrapper reveal-zoom delay-100">
          <div className="section-header">
            <h3 className="bold-heading">Gallery  (swipe for more)</h3>
            <div className="nav-btns">
              <button className="scroll-btn" onClick={() => scroll('left')}>←</button>
              <button className="scroll-btn" onClick={() => scroll('right')}>→</button>
            </div>
          </div>
          <div className="scroll-container" ref={scrollRef}>
            {photos.map((src, index) => (
              <div key={index} className="photo-card" onClick={() => setSelectedImg(src)}>
                <img src={src} alt={`Photo ${index + 1}`} loading="lazy" />
                <div className="card-overlay">Expand</div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="modal" onClick={() => setSelectedImg(null)}>
            <span className="close-btn">&times;</span>
            <img src={selectedImg} className="modal-img" alt="Enlarged" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BioPage;