// Hardocded post - Generally this data comes from database like sequelize, mongodb etc

const posts = [
  { id: 1, title: "First Post"},
  { id: 2, title: "SecondPost"},
]

// export const getPost = () => posts; // This is one way of exporting function in ES6 module

// Below is another way of exporting function in ES6 module
// export const getPost = () => posts; 
// export {getPost};

// Exporting as default
const getPost = () => posts;
export default getPost;
// While importing default export you are not required to use the {}.

export const getPostsLength = () => posts.length;
