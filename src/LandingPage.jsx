import React from 'react';

const styles = {
  fontSerif: {
    fontFamily: "'Times New Roman', Times, serif"
  },
  fontSans: {
    fontFamily: "'Arial', 'Helvetica', sans-serif", 
  },
  fontCursive: {
    fontFamily: "'Pacifico', 'Brush Script MT', cursive"
  },
  title: {
    fontFamily: "'Playfair Display', 'Times New Roman', serif", 
    color: "#8B0000"
  }
};

export default function ChooseUs() {
  return (
    <div className="bg-amber-50 w-full min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center relative">

          {/* Why Section */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-amber-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
              Why
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <div className="text-purple-600 mr-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
                          <h1 className="text-4xl text-red-900 font-bold" style={styles.title}>
              Choose us <span className="text-gray-400 font-normal" style={styles.fontCursive}>...Let's work together</span>
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between mb-16 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 text-left mb-4 md:mb-0">
              <h3 className="text-lg italic text-gray-800" style={styles.fontSerif}>vintage adj.</h3>
              <p className="text-sm text-gray-600" style={styles.fontSans}>of old, recognized and enduring interest, importance or quality; classic</p>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left">
              <h3 className="text-lg italic text-gray-800" style={styles.fontSerif}>hippo n.</h3>
              <p className="text-sm text-gray-600" style={styles.fontSans}>meaning versatile, strong, friendly, assertive, caring, quirky and supportive</p>
            </div>
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-4 border-yellow-500 flex items-center justify-center bg-white mb-6">
                <div className="w-24 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 10H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl mb-2" style={styles.fontSans}>
                <span className="text-gray-600">Why</span> <span className="text-yellow-500 font-medium">We're unique</span>
              </h3>
              <p className="text-sm text-gray-600 text-center">
                We believe in support, customer service and being available to our clients 24/7. We answer our phones, emails and texts. We're unique that way! We provide our clients with the best service and care.
              </p>
            </div>
            
           
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-4 border-green-500 flex items-center justify-center bg-white mb-6">
                <div className="w-24 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-green-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl mb-2" style={styles.fontSans}>
                <span className="text-gray-600">Why</span> <span className="text-green-500 font-medium">We're traditional</span>
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Our values are traditional, but our approach is not. Our clients are people we want to work with. We enjoy the work we do, the people and businesses we do it with and for. Get in touch... you'll see the difference.
              </p>
            </div>
            
            
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-4 border-red-500 flex items-center justify-center bg-white mb-6">
                <div className="w-24 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-red-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl mb-2" style={styles.fontSans}>
                <span className="text-gray-600">Why</span> <span className="text-red-500 font-medium">We're special</span>
              </h3>
              <p className="text-sm text-gray-600 text-center">
                We enjoy what we do and who we do it with! Our passion is very apparent. Get in touch... you'll see the difference.
              </p>
            </div>
          </div>
          
         
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <button className="bg-gray-700 text-white px-6 py-2 rounded-full flex items-center justify-center">
              LEARN MORE <span className="ml-1 text-lg">→</span>
            </button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full flex items-center justify-center">
              CONTACT US <span className="ml-1 text-lg">→</span>
            </button>
          </div>
          
          
          <div className="mb-16 text-center">
            <p className="text-gray-600 mb-2">We live and work by the</p>
            <h2 className="text-4xl font-bold text-yellow-500 mb-2">GOLDEN RULE</h2>
            <p className="text-xl italic" style={styles.fontSerif}>"Do unto others as you would have them do unto you"</p>
            <div className="h-2 bg-red-800 w-full max-w-3xl mx-auto mt-4"></div>
          </div>
          
          
          <div className="relative mb-8">
            <div className="flex items-center justify-start mb-6">
              <div className="bg-amber-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
                Who
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-12">
              <div className="text-purple-600 mr-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h1 className="text-4xl text-red-900 font-bold" style={styles.title}>
                We are <span className="text-gray-400 font-normal" style={styles.fontCursive}>Frequent Research</span>
              </h1>
            </div>
          </div>
          
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 15H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 10H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg mb-2" style={styles.fontSans}>We are a group of...</h3>
              <h4 className="text-2xl font-bold text-yellow-500 mb-4" style={styles.fontSans}>dedicated, creative people</h4>
              <p className="text-sm text-gray-600">
                We love print. We love graphics and design. We love our team. Come check us out.
              </p>
            </div>
            
           
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-green-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12H21.5L16.5 17V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12H2.5L7.5 17V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2.5V7.5L7 2.5H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21.5V16.5L17 21.5H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg mb-2" style={styles.fontSans}>Our <span className="text-green-500 font-bold">bread & butter</span></h3>
              <p className="text-sm text-gray-600">
                Trusted long lasting relationships are the b & b of VHM. We value & build relationships with our clients, vendors, friends, family and each other. It is important for a healthy & happy work environment.
              </p>
            </div>
            
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-red-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg mb-2" style={styles.fontSans}>Got an idea?</h3>
              <h4 className="text-2xl font-bold text-red-600 mb-4" style={styles.fontSans}>Let's talk</h4>
              <p className="text-sm text-gray-600">
                We know that listening is an invaluable skill. We like to listen. Run your ideas by us and we'll give you our honest opinion. Call, email or text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}