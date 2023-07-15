import React from 'react'
import contactus from '../CSS/contactus.css'
import responsivecontactus from '../CSS/responsive-contactus.css'

function Contactus() {
  return (
    <>
    		<div className ="container-fluid contactus">
			<div className ="container">
				<div className ="row">
					<h1 className ="text-center infra">CONTACT US</h1>
				</div>
			</div>
		</div>

	<div className ="container-fluid form">
			<div className ="container">
				<div className ="row">
					<div className ="col-md-6">
						<h1 className ="text-center mt-4">CONTACT US</h1>
		<form>
        <div className ="mb-3">
          <label className  = "text-black">Username:</label>
          <input type="text" name="" className ="form-control"/>
        </div>
        <div className ="mb-3">
          <label className  = "text-black">Password:</label>
          <input type="text" name="" className ="form-control"/>
        </div>
        <div className ="mb-3">
          <label className  = "text-black">D.O.B:</label>
          <input type="date" name="" className ="form-control"/>
        </div>
        <div className ="mb-3">
          <label className  = "text-black">Email:</label>
          <input type="email" name="" className ="form-control"/>
        </div>
        <div className ="mb-3">
          <label className  = "text-black">Mobile Number:</label>
          <input type="number" name="" className ="form-control"/>
        </div>
        <div className ="mb-3">
          <label className Name = "text-black">Gender:</label>
          <br/>
          <input type="radio" name="Male"/>
          <label className  = "text-black">Male</label>
          <input type="radio" name="Male"/>
          <label className  = "text-black">Female</label>
    
          <input type="radio" name="Male"/>
          <label className  = "text-black">Other</label>
        </div>  
        <div className ="mb-3">
          <label className  = "text-black">branch:</label>
          <select className ="form-control">
            <option>Select</option>
            <option>CS</option>
            <option>IT</option>
            <option>EE</option>
            <option>EC</option>
            <option>MECH.</option>
            <option>CIVIL</option>
            <option>AUTOMOBILE</option>
            <option>OTHER</option>
          </select>
        </div>
        <div className ="mb-3">
          <label className  = "text-black">course:</label>
          <select className ="form-control">
            <option>Select</option>
            <option>B.TECH</option>
            <option>MBA</option>
            <option>BCA</option>
            <option>BBA</option>
            <option>MCA</option>
            <option>LLB</option>
            <option>PHD</option>
          </select>
        </div>

        <button className ="btn btn-info">Submit</button>
      </form>
					</div>
					<div className ="col-md-6">
						
					</div>
				</div>
			</div>
		</div>

<div className ="container-fluid">
	
		<div className ="row">
			<h1 className ="title text-center mt-4">OUR LOCATION</h1>
			

            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57285.80930085781!2d78.17595046068135!3d26.184864762138975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c497178e8281%3A0x3a555c950be477e8!2sITM%20University%20Gwalior!5e0!3m2!1sen!2sin!4v1658510250954!5m2!1sen!2sin"
        width="600"
        height="450"
        title="Example iFrame"
        className='mt-4 mb-4'
      />
		</div>
	
</div>
    </>
  )
}

export default Contactus