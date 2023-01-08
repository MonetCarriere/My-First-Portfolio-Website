let section1 = `<section class="home show" id="home">
<div class="home-div">

    <h3>hi there...</h3>
    <h3 class="name">my name is <span>Mo</span></h3>
    <h3 class="post"><div class="post-div">i am  <span class="typing-text"> a front end developer</span></div></h3>
    
    
    
    
</div>
<div class="share">
    <a href="https://github.com/MonetCarriere" class="fab fa-github"></a>
    <a href="https://twitter.com/the_techie_dev" class="fab fa-twitter"></a>
    <a href="#" class="fab fa-linkedin"></a>
    <!--<i class="fa-brands fa-react"></i>-->
</div>
</section>`;

let section2 = `<section class="about show" id="about">
<h1 class="heading">about me</h1>

<div class="content">
    <h3 class="name">my name is <span>Mo</span></h3>
    <p>My coding journey goes a little something like this...</p>
    <p>In 2018 I started traveling and attending a lot of networking events on a quest to figure out what it is I wanted to do with my life. I realized that people who actually loved what they did for a living were mostly in tech. So I started attending more tech related events and mixers. That was how I got introduced to coding.</p>
    <p>Since then, I've attended two bootcamps and have been on a never ending quest of self education. Until recently, coding has always been more of a hobby then something I actually wanted to pursue. And this is mostly due to not feeling like I'm good enough and being overwhelmed by the abundance of information.</p>
    <p>After a while, I started to really surprise myself with my capabilities. It's been a slow process but I finally feel ready to take on my first job. I am a very transparent person. And this is especially true when it comes to skills.</p>
    <p>It's taken a while for me to get to the point of putting myself out there but I want this now more then ever and am willing to do whatever it takes to excell in this feild.</p>
    <p>Eventually, I would like to be able to work remote and experience being a digital nomad. At some point I hope to get into blockchain development.</p>
    <p>I don't romanticize the life of a developer. I know that it takes vigorous dedication And I am up for that challenge. :) </p>

</div>

</section>`;

let section3 = `<section class="service show" id="service">

<h1 class="heading">my services</h1>

<div class="box-container">

    <div class="box">
        <i class="fab fa-html5"></i>
        <p>I'm confident in my HTML abilities. Especially as it relates to forms. </p>
    </div>

    <div class="box">
        <i class="fab fa-css3"></i>
        <p>I'm familiar with SASS, Grid and Bootstrap as well as animations.</p>
    </div>

    <div class="box">
        <i class="fab fa-js"></i>
        <p>I'm decent at vanilla programming and am no stranger to OOP as well.</p>
    </div>

    <div class="box">
        <i class="fab fa-react"></i>
        <p>I'm confident in my knowledge of the fundamentals of this framework.</p>
    </div>

    <div class="box">
        <i class="fab fa-node"></i>
        <p>Oh yeeeah. Node packages all day everyday baby ;)</p>
    </div>

    <div class="box">
        <i class="fab fa-wordpress"></i>
        <p>I mean, it's not real programming but sure, I can use it if you need me to :D</p>
    </div>

</div>

</section>`;

let section4 = `<section class="education show" id="education">

<h1 class="heading">my education</h1>

<div class="box-container">

    <div class="box">
        <div class="year">2019</div>
        <h3>PunchCode</h3>
        <p>In this program, I completed three vanilla JS projects and four React projects. This was my very first bootcamp. And although it wasn't very beginner friendly, I persevered and completed it.</p>
    </div>

    <div class="box">
        <div class="year">2020 - 2021</div>
        <h3>NuCamp</h3>
        <p>This program was very beginner friendly I took a Web Fundamentals course as well as React and React Native. I also took a Backend course to learn MongoDB however, I did not complete the module. </p>
    </div>

    <div class="box">
        <div class="year">2019</div>
        <h3>LV.Net (Internship)</h3>
        <p>This is a ISP company. This was not a paid internship. I just wanted to be exposed to their work culture and they granted me access to their building and allowed me to go over their code. I had a mentor at the time who assisted me. </p>
    </div>

    <div class="box">
        <div class="year">2022</div>
        <h3>Straighterline</h3>
        <p>I am currently enrolled in Straighterline four four prerequisite classes. Upon completion, my plan is to enroll in WGU for their computer science program. </p>
    </div>

</div>

</section>`;

let section5 = `<section class="contact show" id="contact">

<h1 class="heading">contact me</h1>

<div class="row">
<!--
    <form action="">
        <input type="text" class="box" placeholder="first name">
        <input type="text" class="box" placeholder="last name">
        <input type="email" class="box" placeholder="your email">
        <input type="text" class="box" placeholder="your project">
        <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
        <input type="submit" value="message" class="btn">
    </form>
-->

    <div class="content">
        <!--
        <div class="icons">
            <h3><i class="fas fa-map-marker-alt"></i> address </h3>
            <p>mumbai, india 400104</p>
        </div>
        -->
        <div class="icons">
            <h3><i class="fas fa-envelope"></i> email </h3>
            <p>MonetCarriere@yahoo.com</p>
        </div>
        <div class="icons">
            <h3><i class="fas fa-phone"></i> phone </h3>
            <p>702-888-5487</p>
        </div>
    </div>

</div>

</section>`;

const sections = [section1, section2, section3, section4, section5];

const container = document.querySelector(".container");
document.querySelectorAll("li").forEach((button, i) => {
  button.addEventListener("click", () => {
    container.innerHTML = sections[i];
    if (i === 0) location.reload();
  });
});
container.innerHTML = sections[0];
