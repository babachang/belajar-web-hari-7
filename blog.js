let blogs = []

function addBlog(event) {
  event.preventDefault()




  let title = document.getElementById('input-blog-title').value
  let content = document.getElementById('input-blog-content').value

  let image = document.getElementById('input-blog-image').files
  console.log(image);

  image = URL.createObjectURL(image[0])

  let blog = {
    title: title,
    content: content,
    image: image,
    author: 'faizin',
    postAt: new Date()
  }
  blogs.push(blog)

  // console.log(blogs);

  // // looping
  // for (let i= 0; i< blogs.length; i++){
  //     console.log(blogs[i]);
  // }

  renderBlog()
}

// Dom manipulation
function renderBlog() {
  let contentContainer = document.getElementById('contents')

  contentContainer.innerHTML = ''

  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(new Date())} 
          </div>
          <p>
            ${blogs[i].content}
          </p>
          <div style="text-align: right;">
              <span style="font-size: 13px;color: grey;">
                ${getDistanceTime(blogs[i].postAt)}
              </span>
            </div>
        </div>
      </div>`
  }
}


// time
// let time = new Date()

// console.log(time);
// console.log(time.getDate());
// console.log(time.getMonth());
// console.log(time.getFullYear());

// console.log(time.getHours());
// console.log(time.getMinutes());

let month = ['january', 'februari', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

function getFullTime(time) {


  let date = time.getDate()

  let monthIndex = time.getMonth()

  let year = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
  return fullTime
}

function getDistanceTime(time) {

  let timePost = time
  let timeNow = new Date()

  let distance = timeNow - timePost

  let milisecond = 1000
  let secondInHours = 3600
  let hoursInDay = 23
  let minutes = 60
  let seconds = 60

  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay)) // untuk mendapatkan hari
  let distanceHours = Math.floor(distance / (milisecond * minutes * seconds)) // untuk mendapatkan jam

  if (distanceDay >= 1) {
    return(`${distanceDay} day ago`);
  } 
  else if (distanceHours >=1){
      console(`${distanceHours} hours ago`);
    } 
    else if (distanceMinutes >=1){
        return(`${distanceMinutes} minutes ago`);
      } 
      else {
        return(`${distanceSeconds} seconds ago`);
      }
      

}
setInterval(() =>{
  console.log('hello');
  renderBlog()
}, 3000)
