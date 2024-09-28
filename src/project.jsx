//
import YouTube from 'react-youtube';
export default function Project() {
    return (
        <>
            <p id = "jobtitle">My Projects</p>

        <img id="bugsmasher" src="/public/bugsmasher.png" alt="java game" className="projects"/>
        <p id = "bugDescription">Bug Smasher Project: A Javascript assignmnet from semester 2 of Software
         Engineering at Centennial College. I customized the cursor to be a web png, and added sound effects for 
         each point obtained by the user. Upon each point, the speed of the target increases The result was a fully 
         functional game I was able to share with others.</p>

         <img id="slideshow" src="/public/slideshow.png" alt="interactive slideshow" className="projects"/>
         <p id = "slideshowDescription">Interactive Slideshow Gallery: This was a Javascript assignment from semester 2. 
         we created an interactive slideshow, where you can upload images and slide through them with buttons. If you click
         an image, it opens on the same page with an overlay, and options to add the image to your "favourites". the favourites
         gallery appears underneath the main gallery with any favourited images. The result was a fully functional image gallery with
         a user oriented design. </p>

         <img id="calculator" src="/public/calculator.png" alt="interactive slideshow" className="projects"/>
         <p id = "calcDescription">"C# Calculator: In my second semester, we built a C# Calculator using windows form,
          and were required to create a video presenting our final program. The final result was a working calculator application
          with multiple functions. The video is provided below, as well as the URL: https://youtu.be/vx4oPz2DSZA?si=FwC_ajv_vMpnnfVh"</p>

         <YouTube id = "vid" videoId="vx4oPz2DSZA"/>

        </>
    );
    
}

