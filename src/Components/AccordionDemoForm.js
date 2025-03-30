import React, { useState } from 'react';
import { app } from '../firebase'; // Import app from firebase.js
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const AccordionDemoForm = (props) => {

    const [openIndex, setOpenIndex] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        trading: '',
        segment: '',
        investment: '',
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const db = getFirestore(app);
    const addData = async (e) => {
        e.preventDefault();
        console.log('formData',formData)
        try {
            const docRef = await addDoc(collection(db, 'users'), formData);
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };
    return (
        <div class={props.isMobile ? 'container-fluid faq-section pb-2' : "container-fluid pb-2"}>
            <div className= { props.isMobile ? '' : 'container overflow-hidden'}>
            <div className="row align-items-stretch"style={{width:"100%"}}>
              <div className={ props.isMobile ? 'col-12 section-mobile' : 'col-lg-6'} >
            <div className={ props.isMobile ? "accordion-container-mobile" : "accordion-container" }>
                <div className="accordion" id="accordionFlushSection">
                    {accordionData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`collapse${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionFlushSection"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <div className="col-lg-6" >
        
            <div className="r">
                <div className="col-lg-12">
                    <div className="p-4 rounded shadow bg-white">
                        <h3 className="text-center mb-4">Request a Live Demo Call Now!</h3>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange}  placeholder="First Name" className="form-control"  />
                                        </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" id="lastName" placeholder="Last Name" value={formData.lastName}  onChange={handleChange}  required className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Mobile Number" value={formData.phone}  onChange={handleChange}  required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" placeholder="Email ID" value={formData.email}  onChange={handleChange}  required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="trading" className="form-label">Are you currently trading?</label>
                                <select id="trading" required className="form-select" onChange={handleChange} >
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="segment" className="form-label">Segment</label>
                                        <select id="segment" required className="form-select" onChange={handleChange} >
                                            <option value="">Select Segment</option>
                                            <option value="Equity Cash/Intraday">Equity Cash/Intraday</option>
                                            <option value="Option (Call/Put)">Option (Call/Put)</option>
                                            <option value="Future (Derivatives)">Future (Derivatives)</option>
                                            <option value="Index">Index</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="investment" className="form-label">Investment Amount</label>
                                        <select id="investment" className="form-select" onChange={handleChange} >
                                            <option value="">Select Amount</option>
                                            <option value="Below ₹50,000">Below ₹50,000</option>
                                            <option value="₹50,000 - 1 Lakh">₹50,000 - 1 Lakh</option>
                                            <option value="1 Lakh -3 Lakhs">1 Lakh -3 Lakhs</option>
                                            <option value="3 Lakhs -5 Lakhs">3 Lakhs -5 Lakhs</option>
                                            <option value="5 Lakhs & above">5 Lakhs & above</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" onClick={addData} className="w-100 my-3 btn btn-dark">Submit</button>

                        </form>
                    </div>
                </div>
            
        </div>
            </div>
        </div>
            </div>

        </div>
       
    );
};

const accordionData = [
    { question: "Why is Vkstock Vision Trusted Among Traders?", answer: "Vkstock Vision is renowned for its reliability..." },
    { question: "What Services Does Vkstock Vision Offer?", answer: "We specialize in options trading..." },
    { question: "What Markets Does Vkstock Vision Cover?", answer: "Our platform offers comprehensive market coverage..." },
    { question: "What Makes Vkstock Vision Analysts Unique?", answer: "Our professional analysts have extensive knowledge..." },
    { question: "How Does Vkstock Vision Ensure Quality?", answer: "We are committed to delivering highly researched services..." }
];

export default AccordionDemoForm;
