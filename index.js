
//-----------------------This FK array----------------------------------
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
//------------------------------------------------------


//-----------Id list-------------------------------------

const userOneProfilePic = document.getElementById("u1-profile")
const userOnePostImage = document.getElementById("u1-mainPost")
const userOneInf = document.getElementById("U1-info")
const userOneLoc = document.getElementById("U1-location")
const userOneLikes = document.getElementById("p1-likes")
const userOneComment = document.getElementById("p1-comment")

const userTwoProfilePic = document.getElementById("u2-profile")
const userTwoPostImage = document.getElementById("u2-mainPost")
const userTwoInf = document.getElementById("U2-info")
const userTwoLoc = document.getElementById("U2-location")
const userTwoLikes = document.getElementById("p2-likes")
const userTwoComment = document.getElementById("p2-comment")

const userThreeProfilePic = document.getElementById("u3-profile")
const userThreePostImage = document.getElementById("u3-mainPost")
const userThreeInf = document.getElementById("U3-info")
const userThreeLoc = document.getElementById("U3-location")
const userThreeLikes = document.getElementById("p3-likes")
const userThreeComment = document.getElementById("p3-comment")

//------------------------------------------------------


//-----------Deploying avatar from the array-----------------

//----First Post----------------------------------
const firstAvatar = posts[0];
const imgElement = document.createElement("img");
imgElement.src = firstAvatar.avatar;
userOneProfilePic.appendChild(imgElement);
imgElement.classList.add("userImg");


//----Second Post----------------------------------
const secondAvatar = posts[1];
const imgElement2 = document.createElement("img");
imgElement2.src = secondAvatar.avatar;
userTwoProfilePic.appendChild(imgElement2);
imgElement2.classList.add("userImg");

//----Third Post----------------------------------
const thirdAvatar = posts[2];
const imgElement3 = document.createElement("img");
imgElement3.src = thirdAvatar.avatar;
userThreeProfilePic.appendChild(imgElement3);
imgElement3.classList.add("userImg");

//------------------------------------------------------


//-----------Deploying post image from the array-----------------

//----First Post----------------------------------
const firstPost = posts[0];
const imgElementPost = document.createElement("img");
imgElementPost.src = firstPost.post;
userOnePostImage.appendChild(imgElementPost);
imgElementPost.classList.add("Post")


//----Second Post----------------------------------
const secondPost = posts[1];
const imgElementPost2 = document.createElement("img");
imgElementPost2.src = secondPost.post;
userTwoPostImage.appendChild(imgElementPost2);
imgElementPost2.classList.add("Post")

//----Third Post----------------------------------
const thirdPost = posts[2];
const imgElementPost3 = document.createElement("img");
imgElementPost3.src = thirdPost.post;
userThreePostImage.appendChild(imgElementPost3);
imgElementPost3.classList.add("Post")

//------------------------------------------------------


//-----------First post---------------------------------

const vincentName = posts[0].name
userOneInf.textContent = vincentName

const vincentLocation = posts[0].location
userOneLoc.textContent = vincentLocation

const vincentLikes = posts[0].likes
userOneLikes.textContent = vincentLikes + " likes"

const vincentComment = posts[0].comment
userOneComment.textContent = vincentComment

//------------------------------------------------------


//-----------Second post---------------------------------

const gustaveName = posts[1].name;
userTwoInf.textContent = gustaveName

const gustaveLocation = posts[1].location
userTwoLoc.textContent = gustaveLocation

const gustaveLikes = posts[1].likes
userTwoLikes.textContent = gustaveLikes + " likes"

const gustaveComment = posts[1].comment
userTwoComment.textContent = gustaveComment

//------------------------------------------------------


//-----------Third post---------------------------------

const josephName = posts[2].name;
userThreeInf.textContent = josephName

const josephLocation = posts[2].location
userThreeLoc.textContent = josephLocation

const josephLikes = posts[2].likes
userThreeLikes.textContent = josephLikes + " likes"

const josephComment = posts[2].comment
userThreeComment.textContent = josephComment

//------------------------------------------------------
