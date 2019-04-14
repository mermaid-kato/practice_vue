// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#bbb',
  data: {
    keyword: '',
    items: [
      {
        id: 1,
        name: '鈴木太郎',
        email: 'suzukitaro@example.com'
      },
      {
        id: 2,
        name: '佐藤二郎',
        email: 'satoujiro@example.com'
      },
      {
        id: 3,
        name: '田中三郎',
        email: 'tanakasaburo@example.com'
      },
      {
        id: 4,
        name: '山本四郎',
        email: 'yamamotoshiro@example.com'
      },
      {
        id: 5,
        name: '高橋五郎',
        email: 'takahashigoro@example.com'
      }
    ]
  },
  computed: {
    filteredUsers: function () {
      var items = []
      for (var i in this.items) {
        var item = this.items[i]
        if (item.name.indexOf(this.keyword) !== -1 ||
          item.email.indexOf(this.keyword) !== -1) {
          items.push(item)
        }
      }
      return items
    }
  }
})

new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
