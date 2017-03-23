<template>
  <div class='blog container'>
    <h2>{{title}}</h2> 



    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addNewPost">New Post</button>
    <div id="addNewPost" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add New Post</h4>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="title" class="form-control" id="title" v-model="newPost.title">
              </div>
              <div class="form-group">
                <label for="body">Content:</label>
                <textarea class="form-control" rows="5" id="body" v-model="newPost.body"></textarea>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="AddPost()">Add</button>
          </div>
        </div>

      </div>
    </div>


    <hr>
    <div class="row">
    <div class="col-sm-6 col-md-4" v-for="post in posts" style="height: 400px;">
      <div class="thumbnail">
        <img src="https://source.unsplash.com/random">
        <div class="caption">
          <h3>{{post.title | uppercase}}</h3>
           <!--<p>{{post.body}}</p> -->
          <p><a href="#" class="btn btn-primary" role="button">Read More</a> <a href="#" class="btn btn-danger" role="button" v-on:click="deletePost(post)">Delete</a></p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Blog App',
      newPost: {},
      posts: [{
        'userId': 1,
        'id': 1,
        'title': 'A VueJs App',
        'body': 'Get Up and running quick with Vue, a framework that will grow with you'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'Socket.io',
        'body': 'Talk with your friends in real time with Sockets!'
      },
      {
        'userId': 1,
        'id': 3,
        'title': 'Blog Title',
        'body': 'Blog Body'
      }]
    }
  },
  methods: {
    deletePost: function (post) {
      console.log(post)
      this.posts.splice(this.posts.indexOf(post), 1)
    },
    AddPost: function () {
      this.posts.push({
        'userId': 1,
        'id': this.posts.length + 1,
        'title': this.newPost.title,
        'body': this.newPost.body
      })
      this.newPost = {}
    }
  },
  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      this.posts = response.data
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>