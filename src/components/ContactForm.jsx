import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/CommonStyles.css'

const ContactForm = () => {
  const [formInfo, setFormInfo] = useState({
    from_name: '',
    from_email: '',
    message: '',
    to_name: 'Caitlin'
  });
  const [sentMsg, setSentMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
    setSentMsg(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    /* Send form info */
    emailjs.send(
      'service_dpky8nn',    // service id
      'template_dkuqt3k',   // template id
      formInfo,
      '_zfUzXEi8nd-QjgcH'   // public
    )
    .then((result) => {
      console.log(result.text);
      setSentMsg(true)
    });

    /* Reset form info */
    setFormInfo({
        from_name: '',
        from_email: '',
        message: '',
        to_name: 'Caitlin'
    });
  };

  return (
    <form style={{paddingTop: '40px', paddingLeft: '20px', paddingRight: '50px', backgroundColor: 'rgba(255, 255, 255, 0.4)'}} onSubmit={handleSubmit}>
      <div className='From Name' style={{display: 'flex', flexDirection: 'column'}}>
        <label class='font'>Name:</label>
        <input 
          type="text" 
          name="from_name" 
          value={formInfo.from_name} 
          onChange={handleChange} 
          style={{width: '500px', border: '2px solid rgb(0, 0, 0)', outline: 'none'}}
          required
        />
      </div>
      <div className='From Email' style={{display: 'flex', flexDirection: 'column', paddingTop: '10px'}}>
        <label class='font'>Email:</label>
        <input 
          type="email" 
          name="from_email" 
          value={formInfo.from_email} 
          onChange={handleChange} 
          style={{width: '500px', border: '2px solid rgb(0, 0, 0)', outline: 'none'}}
          required 
        />
      </div>
      <div className='Message' style={{display: 'flex', flexDirection: 'column', paddingTop: '10px'}}>
        <label class='font'>Message:</label>
        <textarea 
            style={{width: '500px', height: '100px', border: '2px solid rgb(0, 0, 0)', outline: 'none'}}
            name="message" 
            value={formInfo.message} 
            onChange={handleChange} 
            required 
        />
      </div>
      <div>
        <button className="submit" class='font button-dark' style={{marginTop: '10px'}}>Send</button>
        {sentMsg && <text style={{paddingTop: '10px'}}>Your message has been sent</text>}
      </div>
    </form>
  );
};

export default ContactForm;