Instructions:
Create a Navbar that is displayed on all pages. The content of the Navbar can be anything you want.

Create a route users. In this route, use the getAllUsers function from the lib directory.

On the users page, each user name should be a navigation link that takes the user to their respective user page based on their id.

On the user-specific page, display all the user's posts using the getUserPosts function.

To display the posts mentioned in the previous step, create a UserPosts component that will be responsible for rendering the posts.

Code example:
Here is how to use the getAllUsers function:

const usersData = getAllUsers();
const users = await usersData;

Now you can map through the userData and get the data you want.

Same things for other functions.

Optional:
Create a loading status in each route so that it shows a loading text in slow connections. Check this link

Create an error handling component to be shown incase an error happen. Check this link
