import axios from 'axios'
export default {
  created () {
    this.getUserList()
  },
  data () {
    return {
      usersList: [],
      total: 0,
      pagesize: 3,
      pagenum: 1,
      searchText: '',
      temp: true
    }
  },
  methods: {
    getUserList (pagenum = 1, query = '') {
      axios
        .get('http://localhost:8888/api/private/v1/users', {
          params: {
            pagesize: this.pagesize,
            pagenum,
            query
          },
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          console.log(res)
          if (res.data.meta.status === 200) {
            this.usersList = res.data.data.users
            this.total = res.data.data.total
            this.pagenum = res.data.data.pagenum
          }
        })
    },
    changePage (curPage) {
      console.log(curPage)
      this.getUserList(curPage, this.searchText)
    },
    search () {
      // console.log(this.searchText)
      this.getUserList(1, this.searchText)
    }
  }
}
