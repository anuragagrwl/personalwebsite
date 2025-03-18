Let's adjust the PRD and implementation to ensure compatibility with GitHub Pages, which primarily supports static sites. This means we'll avoid using Next.js and instead use plain HTML, CSS, and JavaScript, with a static approach to Markdown rendering. We'll also refine the third section to focus on data, and I'll provide a detailed explanation of the stick figures, including their SVG code and design rationale.
Adjustments for GitHub Pages
Static Site: GitHub Pages doesn't support server-side rendering or dynamic frameworks like Next.js out of the box. We'll use plain HTML/CSS/JS and pre-render Markdown content manually (or use a static site generator like Jekyll if preferred, but we'll stick to plain HTML for simplicity).
Markdown Rendering: Since GitHub Pages doesn't support dynamic Markdown parsing, we'll pre-convert Markdown files to HTML manually (or Anurag can update the HTML files directly). Alternatively, we can use a client-side library like marked.js to render Markdown, but for simplicity, we'll pre-render the content.
File Structure: We'll organize the site to work with GitHub Pages' default structure (e.g., index.html in the root, subdirectories for pages).
Updated Stick Figures Explanation
The stick figures are simple SVG illustrations designed to visually represent Anurag's skills in a minimalist, playful way, matching the aesthetic of https://philippparzer.com/. Each figure is 50x50px, drawn with white lines (#FFFFFF) on a black background (#000000), using basic shapes (circles, lines, ellipses, rectangles) to keep them lightweight and clean.
1. Problem-Solving Stick Figure (Lifting a Big Rock)
Purpose: Represents Anurag's ability to tackle large challenges, reflecting his experience scaling platforms (e.g., 5X to $2.5M ARR).
Design:
Head: A circle (radius 5px) at the top (center: 25,10) for the head.
Body: A vertical line (y1: 15, y2: 30) for the torso.
Arms: Two horizontal lines (x1: 15, x2: 35, y: 20) angled slightly to show lifting.
Legs: Two angled lines (from x: 25, y: 30 to x: 15/35, y: 40) for a standing pose.
Rock: A rectangle (15,40, width: 20, height: 10) below the figure to represent the "big problem."
SVG Code:
html
<svg class="stick-figure bounce" width="50" height="50" viewBox="0 0 50 50" role="img" aria-label="Stick figure lifting rock">
  <circle cx="25" cy="10" r="5" stroke="#fff" stroke-width="2" fill="none"/>
  <line x1="25" y1="15" x2="25" y2="30" stroke="#fff" stroke-width="2"/>
  <line x1="15" y1="20" x2="35" y2="20" stroke="#fff" stroke-width="2"/>
  <line x1="20" y1="30" x2="15" y2="40" stroke="#fff" stroke-width="2"/>
  <line x1="30" y1="30" x2="35" y2="40" stroke="#fff" stroke-width="2"/>
  <rect x="15" y="40" width="20" height="10" stroke="#fff" stroke-width="2" fill="none"/>
</svg>
Animation: A bounce effect (10px up, back down) to mimic the effort of lifting.
2. User Engagement Stick Figure (Talking)
Purpose: Illustrates Anurag's skill in communicating with users, reflecting his experience in user research (e.g., NITI Aayog project).
Design:
Head: A circle (radius 5px) at the top (center: 25,10).
Body: A vertical line (y1: 15, y2: 30) for the torso.
Arms: Two horizontal lines (x1: 15, x2: 35, y: 20), with the right arm slightly bent to suggest a talking gesture.
Legs: Two angled lines (from x: 25, y: 30 to x: 15/35, y: 40).
Speech Bubble: An ellipse (center: 40,15, rx: 5, ry: 3) to indicate talking.
SVG Code:
html
<svg class="stick-figure scale" width="50" height="50" viewBox="0 0 50 50" role="img" aria-label="Stick figure talking">
  <circle cx="25" cy="10" r="5" stroke="#fff" stroke-width="2" fill="none"/>
  <line x1="25" y1="15" x2="25" y2="30" stroke="#fff" stroke-width="2"/>
  <line x1="15" y1="20" x2="35" y2="20" stroke="#fff" stroke-width="2"/>
  <line x1="20" y1="30" x2="15" y2="40" stroke="#fff" stroke-width="2"/>
  <line x1="30" y1="30" x2="35" y2="40" stroke="#fff" stroke-width="2"/>
  <ellipse cx="40" cy="15" rx="5" ry="3" stroke="#fff" stroke-width="1" fill="none"/>
</svg>
Animation: A scale-up effect (1x to 1.05x) to emphasize the conversational energy.
3. Data Clarity Stick Figure (Analyzing Data)
Purpose: Reflects Anurag's expertise in data-driven clarity, tying to his work with data platforms (e.g., Snowflake, BigQuery) and analytics (e.g., Byju’s analytics overhaul).
Design:
Head: A circle (radius 5px) at the top (center: 25,10).
Body: A vertical line (y1: 15, y2: 30) for the torso.
Arms: Two horizontal lines (x1: 15, x2: 35, y: 20), with the right arm bent to hold a "data chart."
Legs: Two angled lines (from x: 25, y: 30 to x: 15/35, y: 40).
Data Chart: A small bar chart (three vertical lines of varying heights) to represent data analysis.
SVG Code:
html
<svg class="stick-figure rotate" width="50" height="50" viewBox="0 0 50 50" role="img" aria-label="Stick figure analyzing data">
  <circle cx="25" cy="10" r="5" stroke="#fff" stroke-width="2" fill="none"/>
  <line x1="25" y1="15" x2="25" y2="30" stroke="#fff" stroke-width="2"/>
  <line x1="15" y1="20" x2="35" y2="20" stroke="#fff" stroke-width="2"/>
  <line x1="20" y1="30" x2="15" y2="40" stroke="#fff" stroke-width="2"/>
  <line x1="30" y1="30" x2="35" y2="40" stroke="#fff" stroke-width="2"/>
  <line x1="35" y1="20" x2="35" y2="15" stroke="#fff" stroke-width="1"/>
  <line x1="38" y1="20" x2="38" y2="10" stroke="#fff" stroke-width="1"/>
  <line x1="41" y1="20" x2="41" y2="17" stroke="#fff" stroke-width="1"/>
</svg>
Animation: A slight rotation (5 degrees left to right) to suggest analytical focus.
Updated PRD: Anurag Agrawal Minimalist Portfolio Website (GitHub Pages Compatible)
1. Overview
1.1 Purpose
The purpose of this website is to create a minimalist, multi-page portfolio for Anurag Agrawal, featuring a main page with an initial story and three small animated sections, a POW page with his resume, and blog and bookshelf pages for Markdown-based content. The site will be hosted on GitHub Pages, using static HTML/CSS/JS for compatibility.
1.2 Goals
Present Anurag’s skills (problem-solving, user engagement, data clarity) with playful stick figures.
Display his resume on the POW page.
Allow Anurag to write blog posts and book summaries, pre-rendered as HTML for GitHub Pages.
Implement simple animations for engagement.
Ensure fast loading and responsiveness.
1.3 Target Audience
Hiring managers, recruiters, collaborators, and peers in tech and product management.
2. Features and Functionality
2.1 Header Section
Description: A fixed navigation bar at the top-right with links to all pages.
Content: Four links: "home," "blog," "bookshelf," "POW."
Layout: Right-aligned, white text (#FFFFFF), no underlines, 10px spacing.
Functionality: Hover effect changes text color to light gray (#CCCCCC).
2.2 Main Content Section (Home Page)
Description: Initial story and three small sections with text and stick figures.
Sub-Sections:
Initial Story Lines:
Content: Three lines with sequential fade-in animations:
"I can handle hard deadlines and tough business needs."
"Leading teams, communications, consulting expertise."
"I innovate with tech, valuing proven methods."
Animation: Fade-in with slide-up (20px), delays of 0.5s, 1s, 1.5s.
Problem-Solving Section:
Content: Text: "Love to solve big problems." + Stick figure lifting a rock.
Animation: Text fades in with slide-up; stick figure fades in with a bounce, delayed 0.5s.
User Engagement Section:
Content: Text: "Loves talking to users." + Stick figure with a speech bubble.
Animation: Text fades in with slide-up; stick figure fades in with scale-up, delayed 0.5s.
Data Clarity Section:
Content: Text: "I like to bring clarity in the system." + Stick figure with a bar chart.
Animation: Text fades in with slide-up; stick figure fades in with a rotation, delayed 0.5s.
Contact Links:
Content: "Email: anurag.agrawal@btech2013.iitgn.ac.in" and "LinkedIn: [link]" (Teal Blue #2B6CB0 on hover).
Animation: Fade-in with a gentle bounce on scroll.
Layout: Centered, max-width 800px, flex row for text and stick figures, 60px spacing.
2.3 Blog Page
Description: A page listing blog posts, with pre-rendered HTML content.
Content:
List of blog post titles with dates (e.g., "Scaling Data Platforms - March 2025").
Individual post pages (e.g., /blog/scaling-data-platforms.html) with full content.
Functionality:
Anurag writes posts in Markdown, converts to HTML manually (or uses a tool like pandoc), and adds to /blog/.
Example: scaling-data-platforms.md → scaling-data-platforms.html.
Layout: Centered, max-width 800px, clickable links to posts.
2.4 Bookshelf Page
Description: A page listing book summaries, with pre-rendered HTML content.
Content:
List of book titles with dates (e.g., "The Lean Startup - Summary - March 2025").
Individual book pages (e.g., /bookshelf/the-lean-startup.html) with full summaries.
Functionality:
Anurag writes summaries in Markdown, converts to HTML, and adds to /bookshelf/.
Layout: Centered, max-width 800px, clickable links to summaries.
2.5 POW Page
Description: A page displaying Anurag’s resume.
Content: Resume sections: Education, Experience, Projects (as text blocks).
Layout: Centered, max-width 800px, with clear headings.
3. Design Specifications
3.1 Visual Design
Color Palette:
Background: Black (#000000).
Text: White (#FFFFFF).
Hover Accent: Light Gray (#CCCCCC).
Link Color: Teal Blue (#2B6CB0) on hover.
Stick Figures: White (#FFFFFF).
Typography:
Font: "Inter" (via Google Fonts).
Sizes: Headline (48px), Section Text (24px), Resume/Body (18px), Contact (18px).
Stick Figures: As described above (50x50px, white lines).
Spacing: 20px side padding, 100px top margin, 60px between sections.
3.2 Animations
Initial Story Lines:
Fade-in + slide-up (20px), 1s duration, delays 0.5s, 1s, 1.5s.
Section Text & Stick Figures:
Text: Fade-in + slide-up (20px), 1s duration, on scroll (top 80%).
Stick Figures: 
Problem-Solving: Fade-in + bounce (10px), delayed 0.5s.
User Engagement: Fade-in + scale-up (1x to 1.05x), delayed 0.5s.
Data Clarity: Fade-in + rotation (5 degrees), delayed 0.5s.
Contact Links:
Fade-in + bounce, 1s duration, on scroll.
3.3 Responsiveness
Desktop: Max-width 800px, flex row for text and stick figures.
Mobile (< 768px): Stack text and stick figures vertically, headline 32px, text 18px, stick figure 40x40px.
4. Technical Requirements
4.1 Tech Stack
Frontend: HTML, CSS, JavaScript.
Styling: styles.css file.
Hosting: GitHub Pages (static site hosting).
Markdown Conversion: Manual (e.g., using pandoc or online tools like StackEdit).
4.2 Performance
Load Time: < 1 second.
Optimization: Minify CSS, inline SVGs, no external libraries.
4.3 SEO & Accessibility
Meta Tags: <meta name="description" content="Portfolio of Anurag Agrawal, Product Leader">.
Accessibility: High contrast, alt text for SVGs, keyboard navigation.
5. User Stories
As a visitor, I want to see Anurag’s skills with illustrations and read his blog/books.
As a recruiter, I want to review his resume and contact him.
As Anurag, I want to update blog posts and book summaries easily.
6. Success Metrics
Load Time: < 1 second.
Engagement: Visitors view all sections and navigate to blog/bookshelf.
Content Updates: Anurag adds at least one blog post and book summary within 1 month.
Responsiveness: Works on all devices.
Accessibility: Meets WCAG Level AA.
7. Timeline & Milestones
Day 1: Create HTML structure, CSS styling, SVGs (4 hours).
Day 2: Add animations, pre-render Markdown content (3 hours).
Day 3: Test, deploy to GitHub Pages (2 hours).
Total: 9 hours.
8. Assumptions & Constraints
Assumptions: Anurag can convert Markdown to HTML manually or use a tool.
Constraints: Static site, no server-side rendering, minimal assets.
9. Future Enhancements
Add client-side Markdown rendering with marked.js.
Include categories/tags for blog and bookshelf.
Add a contact form.
Implementation Example
Directory Structure
index.html (Home)
styles.css
blog/
  index.html (Blog list)
  scaling-data-platforms.html (Blog post)
bookshelf/
  index.html (Bookshelf list)
  the-lean-startup.html (Book summary)
pow/
  index.html (POW with resume)
Home Page (index.html)
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Portfolio of Anurag Agrawal, Product Leader">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <title>Anurag Agrawal</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">home</a>
      <a href="/blog">blog</a>
      <a href="/bookshelf">bookshelf</a>
      <a href="/pow">POW</a>
    </nav>
  </header>
  <main>
    <h1>Anurag Agrawal</h1>
    <div class="story">
      <p class="story-line">I can handle hard deadlines and tough business needs.</p>
      <p class="story-line">Leading teams, communications, consulting expertise.</p>
      <p class="story-line">I innovate with tech, valuing proven methods.</p>
    </div>
    <div class="section">
      <p class="section-text">Love to solve big problems.</p>
      <svg class="stick-figure bounce" width="50" height="50" viewBox="0 0 50 50" role="img" aria-label="Stick figure lifting rock">
        <circle cx="25" cy="10" r="5" stroke="#fff" stroke-width="2" fill="none"/>
        <line x1="25" y1="15" x2="25" y2="30" stroke="#fff" stroke-width="2"/>
        <line x1="15" y1="20" x2="35" y2="20" stroke="#fff" stroke-width="2"/>
        <line x1="20" y1="30" x2="15" y2="40" stroke="#fff" stroke-width="2"/>
        <line x1="30" y1="30" x2="35" y2="40" stroke="#fff" stroke-width="2"/>
        <rect x="15" y="40" width="20" height="10" stroke="#fff" stroke-width="2" fill="none"/>
      </svg>
    </div>
    <div class="section">
      <p class="section-text">Loves talking to users.</p>
      <svg class="stick-figure scale" width="50" height="50" viewBox="0 0 50 50" role="img" aria-label="Stick figure talking">
        <circle cx="25" cy="10" r="5" stroke="#fff" stroke-width="2" fill="none"/>
        <line x1="25" y1="15" x2="25" y2="30" stroke="#fff" stroke-width="2"/>
        <line x1="15" y1="20" x2="35" y2="20" stroke="#fff" stroke-width="2"/>
        <line x1="20" y1="30" x2="15" y2="40" stroke="#fff" stroke-width="2"/>
        <line x1="30" y1="30" x2="35" y2="40" stroke="#fff" stroke-width="2"/>
        <ellipse cx="40" cy="15" rx="5" ry="3" stroke="#fff" stroke-width="1" fill="none"/>
      </svg>
    </div>
    <div class="section">
      <p class="section-text">I like to bring clarity in the system.</p>
      <svg class="stick-figure rotate" width="50" height="50" viewBox="0 0 50 50" role="img" aria-label="Stick figure analyzing data">
        <circle cx="25" cy="10" r="5" stroke="#fff" stroke-width="2" fill="none"/>
        <line x1="25" y1="15" x2="25" y2="30" stroke="#fff" stroke-width="2"/>
        <line x1="15" y1="20" x2="35" y2="20" stroke="#fff" stroke-width="2"/>
        <line x1="20" y1="30" x2="15" y2="40" stroke="#fff" stroke-width="2"/>
        <line x1="30" y1="30" x2="35" y2="40" stroke="#fff" stroke-width="2"/>
        <line x1="35" y1="20" x2="35" y2="15" stroke="#fff" stroke-width="1"/>
        <line x1="38" y1="20" x2="38" y2="10" stroke="#fff" stroke-width="1"/>
        <line x1="41" y1="20" x2="41" y2="17" stroke="#fff" stroke-width="1"/>
      </svg>
    </div>
    <div class="contact">
      <p>Email: <a href="mailto:anurag.agrawal@btech2013.iitgn.ac.in">anurag.agrawal@btech2013.iitgn.ac.in</a></p>
      <p>LinkedIn: <a href="[link]">[link]</a></p>
    </div>
  </main>
</body>
</html>
Blog Page (blog/index.html)
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Blog of Anurag Agrawal, Product Leader">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <title>Anurag Agrawal - Blog</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">home</a>
      <a href="/blog">blog</a>
      <a href="/bookshelf">bookshelf</a>
      <a href="/pow">POW</a>
    </nav>
  </header>
  <main>
    <h1>Blog</h1>
    <div>
      <a href="/blog/scaling-data-platforms.html" class="text-teal-500 hover:underline">Scaling Data Platforms - March 18, 2025</a>
    </div>
  </main>
</body>
</html>
Blog Post (blog/scaling-data-platforms.html)
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Scaling Data Platforms by Anurag Agrawal">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <title>Scaling Data Platforms</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">home</a>
      <a href="/blog">blog</a>
      <a href="/bookshelf">bookshelf</a>
      <a href="/pow">POW</a>
    </nav>
  </header>
  <main>
    <h1>Scaling Data Platforms to $2.5M ARR</h1>
    <p class="text-xl mb-10">March 18, 2025</p>
    <div class="prose text-left">
      <p>In my role at 5X, I led the development of a self-service data platform, integrating tools like Snowflake and dbt to achieve $2.5M ARR. This post explores the strategy and challenges.</p>
    </div>
  </main>
</body>
</html>
Bookshelf Page (bookshelf/index.html)
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Bookshelf of Anurag Agrawal, Product Leader">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <title>Anurag Agrawal - Bookshelf</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">home</a>
      <a href="/blog">blog</a>
      <a href="/bookshelf">bookshelf</a>
      <a href="/pow">POW</a>
    </nav>
  </header>
  <main>
    <h1>Bookshelf</h1>
    <div>
      <a href="/bookshelf/the-lean-startup.html" class="text-teal-500 hover:underline">The Lean Startup - Summary - March 18, 2025</a>
    </div>
  </main>
</body>
</html>
Book Summary (bookshelf/the-lean-startup.html)
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="The Lean Startup Summary by Anurag Agrawal">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <title>The Lean Startup - Summary</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">home</a>
      <a href="/blog">blog</a>
      <a href="/bookshelf">bookshelf</a>
      <a href="/pow">POW</a>
    </nav>
  </header>
  <main>
    <h1>The Lean Startup by Eric Ries</h1>
    <p class="text-xl mb-10">March 18, 2025</p>
    <div class="prose text-left">
      <p>A great book on building startups with a focus on validated learning and iterative development. Key takeaway: test ideas early with minimal resources.</p>
    </div>
  </main>
</body>
</html>
POW Page (pow/index.html)
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Proof of Work for Anurag Agrawal, Product Leader">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <title>Anurag Agrawal - POW</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">home</a>
      <a href="/blog">blog</a>
      <a href="/bookshelf">bookshelf</a>
      <a href="/pow">POW</a>
    </nav>
  </header>
  <main>
    <h1>Proof of Work</h1>
    <section>
      <h2>Education</h2>
      <p><strong>Post-Graduate Program</strong><br/>Technology Leaders Program, Plaksha, 2020<br/>- Selected in the pioneer batch to learn Artificial Intelligence, Design Thinking, Leadership, and Entrepreneurship in collaboration with UC Berkeley and Purdue University.<br/>- Recognized as Top 3 startup ventures by a panel of VCs for leveraging data-driven models to optimize designs.</p>
      <p><strong>BTech. in Mechanical Engineering</strong><br/>IIT Gandhinagar, 2017<br/>- Awarded the Merit cum Means Scholarship for four consecutive years due to academic excellence.<br/>- Handpicked to intern at ISRO (VSSC), where I simulated rocket nozzle exhaust using molecular dynamics.</p>
    </section>
    <section class="mt-8">
      <h2>Experience</h2>
      <p><strong>Product Lead</strong><br/>5X, Remote, May 2023 - Present<br/>- Led the strategy, development, and growth of a self-service data platform, scaling the company to $2.5M ARR.<br/>- Built the 5X data platform from the ground up, integrating data warehouses (Snowflake, BigQuery), orchestration tools (Dagster), ingestion tools (Fivetran), and modeling layers (dbt, Cube).<br/>- Drove platform scalability and reliability by collaborating with engineering teams on latency optimization and load testing.<br/>- Owned and executed the product roadmap, prioritizing feature development based on customer feedback, competitive analysis, and industry research.<br/>- Led the hiring and mentorship of product managers and designers, establishing best practices for roadmap planning, backlog grooming, and sprint execution.<br/>- Led GTM strategy, working cross-functionally with sales, marketing, and customer support teams to drive customer adoption and retention.</p>
      <p><strong>Product Manager</strong><br/>Atlan, Remote, Oct 2022 - May 2023<br/>- Led the implementation of OAuth 2.0-based SSO authentication for enterprise customers using Okta and Snowflake, streamlining security and access management.<br/>- Built a real-time error-tracking system using Slack + Segment, reducing backend errors caused due to SQL parsing by 10%.<br/>- Onboarded 300 new users onto the platform by spearheading the migration of one of the biggest logistic companies in India from Redash to Atlan.</p>
      <p><strong>Product Manager</strong><br/>Byju's, Gurgaon, Dec 2020 - Oct 2022<br/>- Assumed full ownership of the Byjus Maths vertical app in the US and increased trial booking numbers by 10X by conducting onboarding experiments to reduce CAC.<br/>- Spearheaded a comprehensive overhaul of the product analytics system, ensuring accurate data delivery for stakeholders.<br/>- Designed and launched a zero-to-one customer tech support tool, integrating APIs from 14 different sources.</p>
      <p><strong>Program Manager</strong><br/>TATA Motors, Pune, Aug 2017 - Jul 2019<br/>- Proposed a new 28-ton truck with higher volume capacity, taken up for production after axle regulation changes.<br/>- Increased market share by 10% across 3 cities with a data-driven pricing model and dealer touch points.<br/>- Boosted profitability by 5% for key accounts using Geospatial analysis and real-time reporting.</p>
    </section>
    <section class="mt-8">
      <h2>Projects</h2>
      <p><strong>Job Discovery Platform</strong><br/>Product Volunteer @ NITI Aayog, April 2020 - May 2020<br/>- Researched the informal job market in India, collaborating with workers, contractors, economists, NGOs, and companies.<br/>- Designed the entire UI/UX from scratch with designers.</p>
      <p><strong>Exam Proctoring Software</strong><br/>ML Engineer Intern @ Naukri.com, Feb 2020 - Apr 2020<br/>- Developed candidate authentication with face detection, head pose, and gaze estimation, achieving 92% accuracy.</p>
    </section>
  </main>
</body>
</html>
CSS (styles.css)
css
body {
  background: #000000;
  color: #FFFFFF;
  margin: 0;
  font-family: 'Inter', sans-serif;
  padding: 20px;
}
header {
  position: absolute;
  top: 20px;
  right: 20px;
}
nav a {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
  font-size: 16px;
  transition: color 0.3s ease;
}
nav a:hover { color: #CCCCCC; }
main {
  margin: 100px auto 0;
  max-width: 800px;
  text-align: center;
  padding: 0 20px;
}
h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
}
h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
.story p, .section-text, .contact p {
  font-size: 24px;
  margin-bottom: 20px;
}
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}
.section-text { margin-right: 20px; }
.stick-figure { width: 50px; height: 50px; }
.story-line, .section-text, .stick-figure, .contact {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlideUp 1s ease forwards;
}
.stick-figure.bounce { animation: fadeInBounce 1s ease forwards; }
.stick-figure.scale { animation: fadeInScale 1s ease forwards; }
.stick-figure.rotate { animation: fadeInRotate 1s ease forwards; }
.story-line:nth-child(1) { animation-delay: 0.5s; }
.story-line:nth-child(2) { animation-delay: 1s; }
.story-line:nth-child(3) { animation-delay: 1.5s; }
.section:nth-child(2) .section-text { animation-delay: 2s; }
.section:nth-child(2) .stick-figure { animation-delay: 2.5s; }
.section:nth-child(3) .section-text { animation-delay: 3s; }
.section:nth-child(3) .stick-figure { animation-delay: 3.5s; }
.section:nth-child(4) .section-text { animation-delay: 4s; }
.section:nth-child(4) .stick-figure { animation-delay: 4.5s; }
.contact { animation-delay: 5s; }
a { color: #2B6CB0; text-decoration: none; }
a:hover { text-decoration: underline; }
.prose p { font-size: 18px; margin-bottom: 20px; }
@keyframes fadeInSlideUp { to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInBounce {
  50% { transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInScale { to { opacity: 1; transform: scale(1.05); } }
@keyframes fadeInRotate {
  50% { transform: rotate(-5deg); }
  to { opacity: 1; transform: rotate(0); }
}
@media (max-width: 768px) {
  h1 { font-size: 32px; }
  h2 { font-size: 20px; }
  .story-line, .section-text, .contact p { font-size: 18px; }
  .prose p { font-size: 16px; }
  .stick-figure { width: 40px; height: 40px; }
  .section { flex-direction: column; }
  .section-text { margin-right: 0; margin-bottom: 10px; }
  header { top: 10px; right: 10px; }
  nav a { font-size: 14px; margin-left: 5px; }
}
How to Write Markdown and Convert to HTML
Write Markdown:
Blog Post: Create a file like scaling-data-platforms.md:
markdown
# Scaling Data Platforms to $2.5M ARR
**March 18, 2025**

In my role at 5X, I led the development of a self-service data platform, integrating tools like Snowflake and dbt to achieve $2.5M ARR. This post explores the strategy and challenges.
Book Summary: Create a file like the-lean-startup.md:
markdown
# The Lean Startup by Eric Ries
**March 18, 2025**

A great book on building startups with a focus on validated learning and iterative development. Key takeaway: test ideas early with minimal resources.
Convert to HTML:
Use an online tool like StackEdit or pandoc:
Install pandoc: brew install pandoc (Mac) or download from pandoc.org.
Convert: pandoc scaling-data-platforms.md -o scaling-data-platforms.html.
Copy the HTML content into the respective blog or bookshelf page, wrapping it in the <div class="prose text-left"> section.
Update the List Pages:
Add a new link to blog/index.html or bookshelf/index.html for each new post/summary.
Hosting on GitHub Pages
Create a GitHub Repository:
Name: anurag-agrawal.github.io (or any name if using a custom domain).
Push the Files:
Clone the repo: git clone https://github.com/anurag-agrawal/anurag-agrawal.github.io.git.
Copy the files (index.html, styles.css, blog/, bookshelf/, pow/) into the repo.
Commit and push: git add . && git commit -m "Initial site" && git push origin main.
Enable GitHub Pages:
Go to the repo settings on GitHub.
Scroll to "Pages," select the main branch, and save.
The site will be live at https://anurag-agrawal.github.io.
Next Steps
Test the site locally by opening index.html in a browser.
Convert additional Markdown files to HTML and update the blog/bookshelf pages.
Deploy to GitHub Pages as described.
Would you like help with the deployment process, more Markdown examples, or further customization? Let me know!