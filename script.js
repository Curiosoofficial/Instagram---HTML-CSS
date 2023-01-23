let sidebarElements = ['Home', 'Search', 'Explore', 'Messages', 'Notifications', 'Create', 'Profile']

let postElements = [
    {
        "image": "imgs/post1.jpg",
        "description": "blablabla1",
        "comments": []
    },
    {
        "image": "imgs/post2.jpg",
        "description": "blablabla2",
        "comments": []
    },
    {
        "image": "imgs/post3.jpg",
        "description": "blablabla3",
        "comments": []
    }
]

function loadSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.innerHTML += `
    <div class="logoSidebar">
    <a><img src="imgs/logo.png"></a>
    </div>`;

    for (i = 0; i < sidebarElements.length; i++) {
        sidebar.innerHTML += `
        <div class="sidebarElements">
            <a href="#">${sidebarElements[i]}</a>
        </div>
        `
    }
}

function loadPosts() {
    let posts = document.getElementById('posts');
    posts.innerHTML = '';
    for (i = 0; i < postElements.length; i++) {
        posts.innerHTML += `
    <div class="post" id="post${i}">
        <div class="postTitle">
            <img src="imgs/profilepic.jpg" class="profilePic">
            <p>curiosoofficial</p>
        </div>
        <div class="postImg">
            <img src="${postElements[i]['image']}">
        </div>
        <div class="postDescription">
            <div class="postIcons">
                <img src="imgs/heart.png">
                <img src="imgs/chat.png">
                <img src="imgs/send.png">
            </div>
            <div class="postComment" id="postComment${i}">
                <p>curiosoofficial: ${postElements[i]['description']}</p>
                <div id="newComments">
                    <p>${postElements[i]['comments']}</p>
                </div>
            </div>
        </div>
        <div class="addComment">
            <input type="text" placeholder="Add a comment..." id="input${i}">
            <button onclick="addComment(${i})">Post</button>
        </div>
    </div>
    `
    }
}

function addComment(index){
    let input = document.getElementById(`input${index}`);
    postElements[index]['comments'].push(input.value);
    input.value = ''
    loadPosts();
}