import React from 'react'
import campus from "../CSS/campuslife.css"
import campusresponsive from "../CSS/responsive-campus.css"
function Campus() {
  return (
    <>
    <div class="container-fluid banner1">
			<div class="container">
				<div class="row">
					<h1 class="text-center infra">INFRASTRUCTURE</h1>
				</div>
			</div>
		</div>
	
  <br/><br/>
  <div class="container-fluid  mt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="/images/campus/campus1.webp" class="w-100"/>
        </div>
        <div class="col-md-8">
          <h1><span className='x'>Student Life </span>at Gwalior University Campus</h1>
          <h4>Once the work hours are over, and the classroom and labs close for the day, life on the campus takes on a different turn. Flowers are on full bloom; there is music in the air, and there is the dance, rhythm and energy of youth everywhere. Spring, they say, is a constant season on the Bennett campus!</h4>
        </div>
      </div>
    </div>
  </div>
  <br/><br/>
<div class="container-fluid campus2">
  <div class="container">
    <div class="row">
      <h1 class="text-center title">GALLERY</h1>
      <br/><br/>
      <div class="col-md-4 mt-4">
        <img src="  https://www.bennett.edu.in/wp-content/uploads/2021/07/Classroom.jpg" class="w-100"/>
      </div>
      <div class="col-md-4 mt-4">
        <img src="https://www.bennett.edu.in/wp-content/uploads/2021/07/Moot-Court-Learning-Advocacy-Skills.jpg" class="w-100"/>
      </div>
      <div class="col-md-4 mt-4">
        <img src="https://www.bennett.edu.in/wp-content/uploads/2021/07/Dell-EMC-Lab.jpg" class="w-100"/>
      </div>
    </div>
  </div>
</div>
<div class="container-fluid campus2">
  <div class="container">
    <div class="row">
      <br/><br/>
      <div class="col-md-4 mt-4">
        <img src='https://www.bennett.edu.in/wp-content/uploads/2018/05/Bennett-University-Uphoria-Day1-131-1.jpg' class="w-100"/>
      </div>
      <div class="col-md-4 mt-4">
        <img src='  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHTv6e-gVxvTEt2p7Bcv6ekngX9jcma_KjA&usqp=CAU' class="w-100"/>
      </div>
      <div class="col-md-4 mt-4">
        <img src='https://www.bennett.edu.in/wp-content/uploads/2018/06/yoga-celebration-bennett-university3-min.jpg' class="w-100"/>
      </div>
    </div>
  </div>
</div>
<br/><br/>
  <div class="container-fluid  mt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1>Sports Activities at <span className='x'>Gwalior University</span></h1>
          <p>Sports and extracurricular activities instill strength of character, teamwork, and group problem-solving skills. To promote the well-being and growth of students, the University has established a well-equipped modern Sports Complex that offers plenty of indoor and outdoor sports opportunities to the students. The Sports Complex provides students with world-class facilities including gymnasium, squash courts, indoor and outdoor basketball courts, badminton courts, swimming pool, besides football fields, lawn tennis courts, volleyball courts and cricket grounds.</p>
        </div>
        <div class="col-md-4">
          <img src="/images/campus/volleyball.jpg" class="w-100"/>
        </div>
      </div>
    </div>
  </div>
  <br/><br/><br/>
</>
  )
}

export default Campus