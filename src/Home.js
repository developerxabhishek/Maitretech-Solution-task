import React from "react";
import "./App.css";
import img from "./Image/ma.jpg";
import img2 from "./Image/kidl2.jpg";
import img3 from "./Image/kidl1.jpg";
import img4 from "./Image/hccfk.jpg";
import img5 from "./Image/entrance-prepration3.jpg";
import img6 from "./Image/entrance-prepration2.jpg";
import img7 from "./Image/entrance-prepration.jpg";
import img8 from "./Image/bfa.jpg";
import img9 from "./Image/animation-sketching.jpg";
import img10 from "./Image/3mchc.jpg";
import img11 from "./Image/2ydfa.jpg";
import img12 from "./Image/1ydfa.jpg";
import pic1 from "./Image/img1.jpg";
import pic2 from "./Image/img2.jpg";
import pic3 from "./Image/img3.jpg";
import pic4 from "./Image/img4.jpg";
import pic5 from "./Image/img5.jpg";
import pic6 from "./Image/img6.jpg";
import pic7 from "./Image/img7.jpg";
import pic8 from "./Image/img8.jpg";
import pic9 from "./Image/img9.jpg";
import pic10 from "./Image/img10.jpg";
import pic11 from "./Image/img11.jpg";
import pic12 from "./Image/img12.jpg";
import pic13 from "./Image/img13.jpg";
import pic14 from "./Image/img14.jpeg";
import pic15 from "./Image/img15.jpeg";
import pic16 from "./Image/img16.jpeg";
import pic17 from "./Image/img17.jpg";
import pic18 from "./Image/img18.jpeg";
import pic19 from "./Image/img19.jpg";
import pic20 from "./Image/img20.jpeg";
import pic21 from "./Image/img21.jpeg";
import pic22 from "./Image/img22.jpg";
import playstore from "./Image/gplay.png";
import appstore from "./Image/appstore.png";
import Slider from "./SlideImage";
import { useRef } from "react";
import ReactPlayer from "react-player";
import Top from "./Top";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  const playerRef = useRef(null);
  return (
    <>
      <Top />
      <Navbar />
      <Slider />
      <div className="marquee-div">
        <div className="marquee-div-left">
          <h3>Nifa Updates::</h3>
        </div>
        <div>
          <h3 className="marquee-text">
            <marquee loop="infinite">
              All NIFA courses are now available worldwide through our Live and
              Interactive Online Classes. Please download the NIFA app from our
              online classes page to register for a complimentary trial class.
            </marquee>
          </h3>
        </div>
      </div>

      <div className="section-4">
        <h1>Welcome To National Institute of Fine Arts</h1>
        <p>
          National Institute of Fine Arts (NIFA) is a national center for
          education in arts, fostering the excellence of emerging and
          established artists and advancing art to create a more human world.
          National Institute of Fine Arts (NIFA) was established by MRS RENU
          KHERA in Delhi and NCR of Delhi on July 2005. Institute established
          another unit in Panna (M.P) which is affiliated to Raja Mansingh Music
          and Arts University (Gwalior). Its aim is to provide education and
          training to students on a wide spectrum of Fine Arts.
        </p>
        <p>
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes. We seek to shape the global future of arts with an
          emphasis on excellence that allows its members to reach for the
          highest artistic standards as individuals while recognizing that the
          Art is one of the foundations of a healthy and creative society. This
          is a place where national and international leaders in the arts
          gather, teach, show and perform their work. The institute prides
          itself on its openness and on creating an environment that is safe,
          welcoming, and built on mutual respect.{" "}
        </p>
        <p>
          <b>
            National Institute of Fine Arts is a place where the creative
            expression of individuals is nurtured and a sense of community
            flourishes.
          </b>
        </p>
        <button  id="readmoood" >Read More</button>
      </div>
      <div className="section-5">
        <div className="section-5-left">
          <h1>Online Classes</h1>
          <p>
            Dear Students/Parents, Nifa presents its Learning App for your
            regular art practice in which we have added many amazing features
            Like: Step-by-step recorded demo videos prepared by your faculty
            members. Regular assessment of your practise through assignment
            section. Live class section from same app. Attendance, payment
            invoice, art news, announcements, important information and direct
            connect with the management team are some more features. So hurry up
            n join now to experience personalised coaching by experts sitting at
            your home.
          </p>
          <h3>We wish u Happy Learning. Stay Safe n Healthy.</h3>
          <button id="hdhhdh">Read More</button>
          <h3>Download The App</h3>
          <div className="download">
            <div>
              <img src={playstore} alt="Image Not Found" />
            </div>
            <div>
              <img src={appstore} alt="Image Not Found" />
            </div>
          </div>
        </div>
        <div className="section-5-right">
          <div>
            <ReactPlayer
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                marginTop: "20px",
              }}
              ref={playerRef}
              url="https://www.youtube.com/watch?v=-9cJjaLXKqE&embeds_referring_euri=https%3A%2F%2Fwww.nifafinearts.com%2F&source_ve_path=Mjg2NjY&feature=emb_logo"
              controls={true}
            />
          </div>
        </div>
      </div>

      <div className="section-6-main">
        <h1 style={{margin:"50px 0"}}>Our Courses</h1>
        <div className="card-1-parent">
          <div className="card-1">
            <div className="img-div">
              <img src={img9} alt="Image Not Found" />
            </div>
            <p>
              6 Months Diploma in Sketching & Oil Painting - Regular/Part time
            </p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img10} alt="Image Not Found" />
            </div>
            <p>1 to 3 Months Certificate Hobby Course (Regular and Weekend)</p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img12} alt="Image Not Found" />
            </div>
            <p>One Year Diploma in Fine Arts-Regular/Part Time-Level-3</p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img11} alt="Image Not Found" />
            </div>
            <p>Two years Advance Diploma in Fine Arts - Regular/Part time</p>
            <button className="know-more-btn">Know More</button>
          </div>
        </div>
        <div className="card-1-parent">
          <div className="card-1">
            <div className="img-div">
              <img src={img7} alt="Image Not Found" />
            </div>
            <p>Entrance Preparation For N.I.D</p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img8} alt="Image Not Found" />
            </div>
            <p>B.F.A from UGC Recognised University</p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img} alt="Image Not Found" />
            </div>
            <p>M.A in Painting from UGC Recognised University</p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img5} alt="Image Not Found" />
            </div>
            <p>Entrance preparation for B.F.A</p>
            <button className="know-more-btn">Know More</button>
          </div>
        </div>
        <div className="card-1-parent">
          <div className="card-1">
            <div className="img-div">
              <img src={img3} alt="Image Not Found" />
            </div>
            <p>Kids 1 year Diploma (Level-1)</p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img2} alt="Image Not Found" />
            </div>
            <p>Kids 1 year Diploma (Level-2)</p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img6} alt="Image Not Found" />
            </div>
            <p>Entrance Preparation for NIFT</p>
            <button className="know-more-btn">Know More</button>
          </div>
          <div className="card-1">
            <div className="img-div">
              <img src={img4} alt="Image Not Found" />
            </div>
            <p>3 Months Hobby Certificate Course For Kids</p>
            <button className="know-more-btn">Know More</button>
          </div>
        </div>
      </div>
      <div className="section-7-main">
        <h1>Student's Testimonial</h1>
        <div className="video-section-1">
          <div className="vid-1">
            <ReactPlayer
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              ref={playerRef}
              url=" https://www.youtube.com/watch?v=VrGcY2k5zuc"
              controls={true}
            />
          </div>
          <div className="vid-2">
            <ReactPlayer
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              ref={playerRef}
              url=" https://youtu.be/EnYCmNGoySc"
              controls={true}
            />
          </div>
          <div className="vid-3">
            <ReactPlayer
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              ref={playerRef}
              url=" https://youtu.be/iX6KgBTH__E"
              controls={true}
            />
          </div>
          <div className="vid-4">
            <ReactPlayer
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              ref={playerRef}
              url=" https://youtu.be/hvjJv1zVl2k"
              controls={true}
            />
          </div>
          <div className="vid-5">
            <ReactPlayer
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              ref={playerRef}
              url=" https://youtu.be/GfialCtEAYk"
              controls={true}
            />
          </div>
          <div className="vid-6">
            <ReactPlayer
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              ref={playerRef}
              url=" https://youtu.be/S5AUDt6999o"
              controls={true}
            />
          </div>
        </div>
      </div>

      <div className="section-8">
        <div>
          <h2>Student Work</h2>
        </div>
        <div className="section-8-image-parent">
          <div className="section-8-box-1">
            <img src={pic1} alt="Image Not Found" />
          </div>
          <div className="section-8-box-2">
            <img src={pic2} alt="Image Not Found" />
          </div>
          <div className="section-8-box-3">
            <img src={pic3} alt="Image Not Found" />
          </div>
          <div className="section-8-box-4">
            <img src={pic4} alt="Image Not Found" />
          </div>
          <div className="section-8-box-5">
            <img src={pic5} alt="Image Not Found" />
          </div>
          <div className="section-8-box-6">
            <img src={pic6} alt="Image Not Found" />
          </div>
          <div className="section-8-box-7">
            <img src={pic7} alt="Image Not Found" />
          </div>
          <div className="section-8-box-8">
            <img src={pic8} alt="Image Not Found" />
          </div>
          <div className="section-8-box-9">
            <img src={pic9} alt="Image Not Found" />
          </div>
          <div className="section-8-box-10">
            <img src={pic10} alt="Image Not Found" />
          </div>
          <div className="section-8-box-11">
            <img src={pic11} alt="Image Not Found" />
          </div>
          <div className="section-8-box-12">
            <img src={pic12} alt="Image Not Found" />
          </div>
          <div className="section-8-box-13">
            <img src={pic13} alt="Image Not Found" />
          </div>
          <div className="section-8-box-14">
            <img src={pic14} alt="Image Not Found" />
          </div>
          <div className="section-8-box-15">
            <img src={pic15} alt="Image Not Found" />
          </div>
          <div className="section-8-box-16">
            <img src={pic16} alt="Image Not Found" />
          </div>
          <div className="section-8-box-17">
            <img src={pic17} alt="Image Not Found" />
          </div>
          <div className="section-8-box-18">
            <img src={pic18} alt="Image Not Found" />
          </div>
          <div className="section-8-box-19">
            <img src={pic19} alt="Image Not Found" />
          </div>
          <div className="section-8-box-20">
            <img src={pic20} alt="Image Not Found" />
          </div>
          <div className="section-8-box-21">
            <img src={pic21} alt="Image Not Found" />
          </div>
          <div className="section-8-box-22">
            <img src={pic22} alt="Image Not Found" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
