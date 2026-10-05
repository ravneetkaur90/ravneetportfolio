<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Ravneet – Web Designer & Developer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- NAVBAR -->
<header class="topbar">
  <a href="#home" class="logo"><b></b>Ravneet</a>
  <div class="top-right">
    <a href="#contact" class="talk">Let's talk</a>
    <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="overlay">
      <span id="menuLabel">Menu</span>
      <span class="burger"><i></i><i></i></span>
    </button>
  </div>
</header>

<nav class="overlay" id="overlay" aria-label="Main">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <p class="mail">Say hi at <a href="mailto:ravneetravu2003@gmail.com">ravneetravu2003@gmail.com</a></p>
</nav>

<!-- HERO -->
<main>
  <section class="hero" id="home">
    <h1 class="name">Ravneet</h1>
    <p class="sub"><strong>Web Designer & Full-Stack Developer.</strong> I craft modern, high-performance websites that combine stunning design, seamless functionality, and effortless user experiences.</p>

    <div class="actions">
      <a href="#projects" class="btn btn-main">View my work</a>
      <a href="#contact" class="btn btn-soft">Contact me</a>
    </div>
    

    <!-- Stickers -->
    <div class="sticker s-photo p1" role="img" aria-label="Ravneet's photo">
      <img src="" alt="Portrait of Ravneet" class="portrait"><span class="initials">RR</span>
    </div>
    <div class="sticker bubble p2">Hello!</div>
    <div class="sticker pill p3">Web designer</div>
    <div class="sticker pill p4">Developer</div>
   
    <div class="sticker pill live p6"><i></i>Open to work</div>

    <!-- Skills strip -->
    <div class="strip" aria-hidden="true">
      <div class="track">
        <span>HTML</span><span>CSS</span><span>PHP</span><span>Laravel</span><span>Canva</span><span>Responsive design</span><span>UI design</span>
        <span>HTML</span><span>CSS</span><span>PHP</span><span>Laravel</span><span>Canva</span><span>Responsive design</span><span>UI design</span>
      </div>
    </div>
  </section>
</main>


 
<!-- ================= ABOUT SECTION (paste this block into your page) ================= -->
<section class="about" id="about">
 
  <div class="about-top">
    <h2 class="about-title">A little about me
      <small>The person behind the pixels and the code.</small>
    </h2>
    <div class="about-text">
      <p>I'm a web designer and front-end developer who likes turning messy ideas into clear, friendly websites.</p>
      <p>I started building websites because I enjoyed seeing an idea turn into something people could click and use. Today I work with small businesses, startups, and creators to design and build sites that look good and load fast on any device.</p>
      <p>When I'm not working, you'll find me taking photos, listening to music, or learning something new.</p>
      <div class="about-actions">
        <a href="images/resume.pdf" class="btn btn-dark" download>Download resume</a>
        <a href="#contact" class="btn btn-line">Get in touch</a>
      </div>
    </div>
  </div>
 
  <div class="about-grid">
 
    <div class="card c-photo">
      <img src="" alt="Portrait of Ravneet" class="portrait">
      <div class="initials">R</div>
      <div class="photo-tag">Ravneet <span><i></i>Available for work</span></div>
    </div>
 
    <div class="card c-journey">
      <h3>My journey</h3>
      <p class="sm">A few steps along the way</p>
      <ul class="journey">
        <li><b>2025</b><span>Completed my graduation in B.voc. - E-commerce and Digital Marketing</span></li>
        <li><b>March 2025</b><span>Working as a Web Developer - Trainee in CT GROUP</span></li>
        <li><b> July 2025</b><span>Started my first job as a Web Developer in CT GROUP</span></li>
        <li><b>Now</b><span>1+ year of experience</span></li>
      </ul>
    </div>
 
    <div class="card c-stats">
      <div class="head"><h3>In numbers</h3><p class="sm">Work so far</p></div>
      <div class="stat"><b data-count="1">1+</b><span>Years of experience</span></div>
      <div class="stat"><b data-count="20">20+</b><span>Websites</span></div>
       <div class="stat"><b data-count="3">3+</b><span>Admin Panels</span></div>
    </div>
 
    <div class="card c-fun">
    <h3>Beyond the Screen</h3>
    <p class="sm">Things that inspire my creativity</p>


<div class="chips">
    <span><i class="fa-solid fa-camera"></i> Visual Stories</span>
    <span><i class="fa-solid fa-lightbulb"></i> New Ideas</span>
    <span><i class="fa-solid fa-code"></i> Side Projects</span>
    <span><i class="fa-solid fa-compass"></i> Exploring</span>
    <span><i class="fa-solid fa-book-open"></i> Learning</span>
</div>


</div>

    <div class="card c-tools" id="toolbox">
      <h3>What I work with</h3>
      <p class="sm">The tools I use most</p>
      <div class="tools">
        <div class="tool"><div class="row">HTML CSS and PHP<em>90%</em></div><div class="bar"><i></i></div></div>
        <div class="tool"><div class="row">JavaScript <em>80%</em></div><div class="bar"><i></i></div></div>
        <div class="tool"><div class="row">Laravel <em>70%</em></div><div class="bar"><i></i></div></div>
        <div class="tool"><div class="row">Canva <em>85%</em></div><div class="bar"><i></i></div></div>
      </div>
    </div>
 
    <div class="card c-cta" id="cta">
      <div>
        <h3>Have an idea for a project?</h3>
        <p class="sm">I reply within one day.</p>
      </div>
      <a href="#contact" class="btn btn-white">Let's work together</a>
    </div>
 
  </div>
</section>
<!-- ================= END ABOUT SECTION ================= -->
 
 
<!-- ================= PROJECTS SECTION (paste this block into your page) ================= -->
<section class="projects" id="projects">
  <div class="p-head">
    <h2 class="p-title"> Projects
      <small>A selection of websites and digital experiences I’ve designed and developed.</small>
    </h2>
  </div>
 
  <div class="p-view" id="pview">
    <div class="p-track" id="track"></div>
  </div>

  <div class="p-controls">
    <button class="p-arrow" id="pPrev" type="button" aria-label="Previous project" aria-controls="track">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
    </button>
    <div class="p-dots" id="pDots"></div>
    <button class="p-arrow" id="pNext" type="button" aria-label="Next project" aria-controls="track">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
    </button>
  </div>
 
  <!-- <div class="p-foot">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener" class="btn btn-line">See more on GitHub</a>
  </div> -->
</section>
<!-- ================= END PROJECTS SECTION ================= -->
 

 
<!-- ================= TOOLKIT SECTION (paste this block into your page) ================= -->
<section class="toolkit" id="skills">
  <div class="tk-layout">
 
    <div class="tk-side">
      <h2 class="tk-heading">My toolkit</h2>
      <p class="tk-intro">Pick a tab to see what I do, what I build with, and the tools I use every day.</p>
 
      <div class="tk-nav" role="tablist" aria-label="Skills, technologies and tools" aria-orientation="vertical">
        <button class="tk-tab" role="tab" id="tab-skills" aria-controls="pane-skills" aria-selected="true" data-tab="skills">
          <span>Skills<small>things I do</small></span>
          <span class="tk-go"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </button>
        <button class="tk-tab" role="tab" id="tab-tech" aria-controls="pane-tech" aria-selected="false" tabindex="-1" data-tab="tech">
          <span>Technologies<small>I build with</small></span>
          <span class="tk-go"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </button>
        <button class="tk-tab" role="tab" id="tab-tools" aria-controls="pane-tools" aria-selected="false" tabindex="-1" data-tab="tools">
          <span>Tools<small>I use daily</small></span>
          <span class="tk-go"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </button>
      </div>
    </div>
 
    <div class="tk-stage" id="stage" data-tab="skills">
      <!-- <div class="tk-corner" id="corner" aria-hidden="true">07</div>
  -->
      <!-- Skills -->
      <div class="tk-pane play" role="tabpanel" id="pane-skills" aria-labelledby="tab-skills">
        <p class="tk-title"><i></i>What I do</p>
        <ul class="tk-rows">
          <li class="tk-row tk-in">Frontend Development</li>
          <li class="tk-row tk-in">Backend Development</li>
          <li class="tk-row tk-in">MySQL and Database Management</li>
          <li class="tk-row tk-in">Website Maintenance</li>
          <li class="tk-row tk-in">Content Management</li>
          <li class="tk-row tk-in">SEO-Friendly Website Optimization</li>
          <li class="tk-row tk-in">Meta Campaigns Management</li>
        </ul>
      </div>
 
      <!-- Technologies -->
      <div class="tk-pane" role="tabpanel" id="pane-tech" aria-labelledby="tab-tech" hidden>
        <p class="tk-title"><i></i>What I build with</p>
        <ul class="tk-table">
          <li class="tk-cell tk-in"><span class="no">01</span><span class="sym">Php</span><span class="nm">PHP</span></li>
          <li class="tk-cell tk-in"><span class="no">02</span><span class="sym">Ht</span><span class="nm">HTML</span></li>
          <li class="tk-cell tk-in"><span class="no">03</span><span class="sym">Cs</span><span class="nm">CSS</span></li>
          <li class="tk-cell tk-in"><span class="no">04</span><span class="sym">Js</span><span class="nm">JavaScript</span></li>
          <li class="tk-cell tk-in"><span class="no">05</span><span class="sym">Bs</span><span class="nm">Bootstrap</span></li>
          <li class="tk-cell tk-in"><span class="no">06</span><span class="sym">Lv</span><span class="nm">Laravel</span></li>
          <li class="tk-cell tk-in"><span class="no">07</span><span class="sym">Sq</span><span class="nm">MySQL</span></li>
          <li class="tk-cell tk-in"><span class="no">08</span><span class="sym">Wp</span><span class="nm">WordPress</span></li>
        </ul>
      </div>
 
      <!-- Tools -->
      <div class="tk-pane" role="tabpanel" id="pane-tools" aria-labelledby="tab-tools" hidden>
        <p class="tk-title"><i></i>What I use every day</p>
        <div class="tk-cloud">
          <span class="tk-pill tk-in">Visual Studio Code</span>
          <span class="tk-pill tk-in">GitHub</span>
          <span class="tk-pill tk-in">XAMPP</span>
          <span class="tk-pill tk-in">Envato</span>
          <span class="tk-pill tk-in">Canva</span>
          <span class="tk-pill tk-in">Microsoft Excel</span>
          <span class="tk-pill tk-in">Microsoft Word</span>
          <span class="tk-pill tk-in">Microsoft PowerPoint</span>
        </div>
        <div class="tk-ai">
          <p class="tk-title"><i></i>AI tools</p>
          <div class="tk-cloud">
            <span class="tk-pill tk-in">ChatGPT</span>
            <span class="tk-pill tk-in">Gemini</span>
            <span class="tk-pill tk-in">Claude</span>
            <span class="tk-pill tk-in">KiloCode</span>
            <span class="tk-pill tk-in">Copilot</span>
          </div>
        </div>
      </div>
    </div>
 
  </div>
</section>
<!-- ================= END TOOLKIT SECTION ================= -->


<!-- ================= CONTACT SECTION (paste this block into your page) ================= -->
<section class="contact" id="contact">
  <div class="ct-shell">

    <div class="ct-left">
      <span class="ct-status"><i></i>Available for new projects</span>
      <h2 class="ct-title">Have a project in mind? Let's talk.</h2>
      <p class="ct-lead">Tell me about your website, your idea, or the problem you want to solve. I usually reply within one day.</p>

      <ul class="ct-list">
        <li><a class="ct-item" href="mailto:ravneetravu2003@gmail.com">
          <span class="ct-ico"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/></svg></span>
          <div><small>Email</small><span>ravneetravu2003@gmail.com</span></div></a></li>
     
        <li><div class="ct-item">
          <span class="ct-ico"><svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/></svg></span>
          <div><small>Location</small><span>Jalandhar, Punjab, India</span></div></div></li>
      </ul>

    
    </div>

    <div class="ct-form-wrap">
      <form class="ct-form" id="ctForm" novalidate>
        <h3>Send me a message</h3>
        <p>Fill in the form and I'll get back to you.</p>

        <!-- spam trap: hidden from people, bots fill it in -->
        <div style="position:absolute;left:-9999px;" aria-hidden="true">
          <label for="ctWebsite">Leave this empty</label>
          <input id="ctWebsite" name="website" type="text" tabindex="-1" autocomplete="off">
        </div>

        <div class="ct-row">
          <div class="ct-field">
            <label for="ctName">Your name</label>
            <input id="ctName" name="name" type="text" placeholder="Your full name" autocomplete="name" required>
          </div>
          <div class="ct-field">
            <label for="ctEmail">Your email</label>
            <input id="ctEmail" name="email" type="email" placeholder="you@example.com" autocomplete="email" required>
          </div>
        </div>

        <div class="ct-field">
          <span class="ct-label" style="font-size:.82rem;font-weight:600" id="ctWhat">What do you need?</span>
          <div class="ct-chips" role="group" aria-labelledby="ctWhat">
            <label><input type="radio" name="service" value="New website" checked><span>New website</span></label>
            <label><input type="radio" name="service" value="Website maintenance"><span>Maintenance</span></label>
            <label><input type="radio" name="service" value="WordPress"><span>WordPress</span></label>
            <label><input type="radio" name="service" value="SEO"><span>SEO</span></label>
            <label><input type="radio" name="service" value="Meta campaigns"><span>Meta campaigns</span></label>
            <label><input type="radio" name="service" value="Something else"><span>Something else</span></label>
          </div>
        </div>

        <div class="ct-field">
          <label for="ctMsg">Your message</label>
          <textarea id="ctMsg" name="message" placeholder="Tell me a little about your project…" required></textarea>
        </div>

        <button type="submit" class="ct-send" id="ctSend">
          <span id="ctSendText">Send message</span>
          <svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg>
        </button>
        <p class="ct-msg" id="ctMsgBox" role="status" aria-live="polite"></p>
        <p class="ct-note">Your details are only used to reply to you.</p>
      </form>
    </div>

  </div>
</section>

<footer class="ct-foot">
  <span>© <span id="ctYear">2026</span> Your Name. All rights reserved.</span>
  <a href="#home">Back to top <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg></a>
</footer>

<script src="script.js" defer></script>
</body>
</html>
