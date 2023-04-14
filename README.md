<a name="top-of-page"></a>
<!--- Title Section --->

<div align="center">
	<h1>Event Planner</h1>
	<a href="https://capable-mermaid-1f46e1.netlify.app/">Live App Link</a> &#x2022 <a href="https://github.com/hoahdo/event-planner">GitHub Repo Link</a>
</div>

<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/94433620/232168267-eb71e587-0611-4b10-b9a6-3e442be90fbd.png" width=""/>
</p>


<!--- About Section --->

## About
This web application was created to allow users to organize events by creating postings for them. Users are able to create a posting detailing the name of the event, when its going to take place, and an optional description of the event. They are also then able to view all the event postings in one place as well as be able to update the event should any changes arise or remove the posting completely.

### Features

* Able to view all event postings on one page
* User can edit event postings after they are created
* User can remove an event post
* User can add event posts

### Built With

* Frontend

  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> 
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
 
* Backend

  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  
* Database

  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>

* Other

  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white"/>


<!--- Installation & Setup Section --->

## Installation & Setup

You will need `npm` and `vite` installed globally on your machine.

 1. Clone this repo
    ``` 
    git clone https://github.com/hoahdo/event-planner.git
    ```
 2. Change directory into client folder
    ```
    cd .\client\
    ```
 3. Install dependencies 
    ``` 
    npm install
    ``` 
 4. Start development server 
    ``` 
    npx vite
    ```
 5. Change directory into server folder
    ```
    cd..  &&  cd .\server\
    ```
 6. Install dependencies 
    ``` 
    npm install
    ``` 
 7. Start backend server
    ```
    npm start
    ```


<!--- Usage Section --->

## Usage

### View all events

<img src="https://user-images.githubusercontent.com/94433620/232168500-507dfe59-1178-4229-890c-28a4462e1a06.png" width="" />

### Create a new event post

<img src="https://user-images.githubusercontent.com/94433620/232168587-0050922f-acbb-4690-b6c4-a0160057f37e.png" width="" />

<img src="https://user-images.githubusercontent.com/94433620/232168835-25bb4fe8-3931-40f5-b2a0-319d6d979a44.png" width="" />

### Update an event post

<img src="https://user-images.githubusercontent.com/94433620/232168738-193c431c-2852-473e-82db-8cfb18cbcc96.png" width="" />

<img src="https://user-images.githubusercontent.com/94433620/232168762-88e869a8-484d-4873-9761-8884f2f34f88.png" width="" />

### Delete an event post

<img src="https://user-images.githubusercontent.com/94433620/232168885-f0046a30-4149-4e48-b8d7-485c20af3714.png" width="" />

<img src="https://user-images.githubusercontent.com/94433620/232168901-24e342d1-fb72-461e-abee-edc6984dbc14.png" width="" />


<!--- Contributing Section--->

## Contributing

1. Fork this repo:  https://github.com/hoahdo/event-planner/fork 
2. Create your feature branch:  `git checkout -b my-new-feature` 
3. Commit your changes:  `git commit -m 'Add some feature'` 
4. Push to the branch:  `git push origin my-new-feature` 
5. Create a new pull request:  https://github.com/hoahdo/event-planner/pulls 


<!--- Status Section --->

## Project Status

<a href="https://www.repostatus.org/#active"><img src="https://www.repostatus.org/badges/latest/active.svg" height="30"/></a>

### Roadmap

- [x] Add update post modal
- [x] Add delete post modal
- [x] Refactor backend to MVC architecture
- [ ] Add login page

### Known Issues

* Update modal date field not populated by previously set date
* Date format not consistent


<!--- Reflection Section --->

## Reflection

Things I learned:

* How to create page routing with React Router
* How to add custom styles using TailwindCss
* How to send data between the frontend and backend
* How to interface with a database in the cloud with MongoDB Atlas
* Learning to utilize state changes to re-render a page versus using reload
* The folder structure of an MVC architecture pattern
* The use of useRef instead of useState


<!--- Resources Section --->

## Resources

* https://dev.to/salehmubashar/useref-or-usestate-which-is-better-258j
* https://render.com/docs
* https://reactrouter.com/en/main/start/overview
* https://www.youtube.com/watch?v=fsTGQi-SvSg
* https://www.youtube.com/watch?v=p7J7u_9_3FI
* https://docs.cyclic.sh/troubleshooting/main-entry-point-does-not-exist


<!--- License Section --->

## License
[MIT](LICENSE) License (2023)

<p align="right">(<a href="#top-of-page">Back to Top</a>)</p>
