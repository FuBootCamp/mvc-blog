
#
# MVC BLOG: Tech - BLOG
######
![Static Badge](https://img.shields.io/badge/license_by-MIT-blue.svg)
###
## Table of contents
* [Description of the project](#description-section)
* [Installation instructions](#installation-section)
* [Usage information](#usage-section)
* [Test instructions](#test-section)
* [Questions](#questions-section)
* [License information](#license-section)
<a id="description-section"></a>
## Description of the project

This challenge consisted of implementing a Blog, where visitors can view existing titles, and as Blog members,
they can add Posts and make comments to existing Posts. Also, members can update and delete their own Posts. 
The application has a Model-View-Controllers (MVC) architecture pattern where the parts of the code are separated 
according to their function. To manage the BLOG information, the "postgres" database was used and the "Models" 
(tables and relations) were defined by means of SEQUELIZE. In the "Controllers" part, the API routes in JavaScript 
were integrated, and in the "Views" part, "handlebars" templates were integrated through which the information is
displayed in HTML format and integrating the information obtained from the database.

The BLOG is a FullStack application (Front-end and Back-end) where besides integrating an external relational database (Postgres), libraries (sequelize) were added for the construction of the different modules of the application.

This application will be deployed via Render with the modality of including the database, "postgres" in this case.

In order to build the different modules according to the MVC architecture pattern, the challenge consisted in
understanding perfectly the way the different modules interact and the flow that the application follows to 
perform the operations requested by the user:

    From the application startup files, the "server.js" that loads the libraries and "lifts" the server, as well as 
    "main.handlebars", "homepage.handelbars", and "homeroutes.js" to deploy the "homepage". 

    Going through "main.handlebars" which calls the different "endpoints" and the corresponding path is executed 
    and the information is displayed with the corresponding template.

    And the flow of the different modules that are executed to respond to a user request. For example, if a user
    is in their dashborad and clicks on one of their posts, the route "/updatedeletepost/id" will be called 
    (where id is the id of the selected post), the information will be displayed using the template 
    "updatedeletepost.handlebars" which in turn calls the module "public/js/post.js" to listen to the form events 
    and when listening to a "click" on the "update" button, the module public/js/post.js will call the API route 
    "api/posts/id" which is in the module controller/api/postRoutres.js.

It was also challenging to do the Web Service configuration in Render including the creation of the database.

Building a FullStack application with MVC architecture is a great foundation for future application development. Building modules with specific tasks that can later be reused in new projects is really motivating because I can start building my own library of modules so I don't have to redo the coding.

In the end, this challenge took me much longer than I thought it would. I think that after understanding the logistics of operation, building the modules was not so easy. The time spent to debug errors was also long as it was not easy to locate the bugs. But I am convinced that this project leaves a great learning for my training. 


<a id="installation-section"></a>
## Installation instructions

Render link...

https://mvc-blog-k261.onrender.com

<a id="usage-section"></a>
## Usage information

Homepage 

![Homepage for visitors](/images/Homepage%20as%20visitor.png)

Sign in / Sign out

![Sign in Sign up](/images/Page%20to%20sign%20in%20sign%20up.png)

Homepage for members

![Homepage for member](/images/Homepage%20singned%20in.png)

Adding a comment

![Add a comment](/images/Add%20a%20comment.png)

Update or delete a post

![Update delete post](/images/Update%20delete%20a%20post.png)
<a id="test-section"></a>
## Test instructions

Go to render and try all the opration...

Sing Up as a new user, add a post, add a comment, update your post and finaly delete it.

Remember, if you not use the app for a while, yo will need to sign in again.


<a id="questions-section"></a>
## Questions
If you have any doubts, please contact me...
######
This is my GitHub profile
######
[GitHub](https://github.com/fubootcamp)
######
This is my email address
######
buzonplataforma12@gmail.com
####
<a id="license-section"></a>
#### License information
The MIT License
                                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                                IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                                DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                                A RISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                                DEALINGS IN THE SOFTWARE
