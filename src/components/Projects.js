import React from 'react'

const Projects = () => {
  

  return (
    <>
      <div>
        <h4><a href='https://github.com/Jingyi-H/VisualOdometry'>Visual Odometry</a></h4>
        <p>A basic implementation on visual odometry from scratch. It outputs the coordinates of the camera given captured videos. RANSAC is introduced to improve the MSE score.</p>
      </div>
      <hr />
      <div>
        <h4><a href='https://github.com/minghuiyang1998/Distributed_ManagerNode'>Distributed Password Cracker</a></h4>
        <p>
          This project is a Hadoop like distributed system for cracking 5-character (with letters only, i.e., a-z, A-Z) passwords hashed by md5. 
          It is a parallel and scalable application with a manager node (to distribute load to each worker node dynamically) 
          and several worker nodes (to crack the password through a brute force approach). 
          During the process, the user is able to add/remove worker nodes on the fly. 
        </p>
      </div>
      <hr />
      <div>
        <h4><a href='https://github.com/Jingyi-H/text-analysis-on-danmaku'>Sentiment Analysis on Bilibili Danmaku</a></h4>
        <p>
          The project aims to analyze the sentiment of danmaku -- real time comments --  in videos and tries to predict the category of a video given the danmaku. 
          It includes a web crawler on Bilibili -- a Chinese streaming website -- danmaku and the text analysis program on the captured text. 
        </p>
      </div>
      <hr />
      <div>
        <h4><a href='https://github.com/Jingyi-H/GUI-spider-taobao'>GUI Web Crawler on Taobao Livestreams Sales Data</a></h4>
        <p>
          This is a GUI application allows users to export products and their sales data of the live seller and a date range. 
          The user needs to input a livestream id (binded with the seller) and specify the date range.
        </p>
      </div>
      <hr />
      <div>
        <h4><a href='https://github.com/Jingyi-H/Avaware-JSP'>App Store Web Application</a></h4>
        <p>
          A full stack application using Java Servlet as backend and Bootstrap framework. 
          It contains basic App Store functions: sign up/in, purchase, viewing order history and so on. 
          It allows auto fill-in with uploaded id photo using a text identification API.
        </p>
      </div>
    </>
  )
}

export default Projects