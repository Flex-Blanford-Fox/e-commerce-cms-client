import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'
import Swal from 'sweetalert2'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    keyword: ''
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.keyword = ''
      state.products = payload
    },

    SET_PRODUCT (state, data) {
      state.product = data
    },

    SET_KEYWORD (state, keyword) {
      state.keyword = keyword
    }
  },
  actions: {
    submitLogin (context, payload) {
      const { email, password } = payload
      axios.post('/login', { email, password })
        .then(data => {
          console.log(data.data.access_token)
          localStorage.setItem('access_token', data.data.access_token)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/products')
        })
        .catch(err => {
          if (err.response.data.message === 'Username/Password Salah') {
            Swal.fire(
              'Login Failed',
              'Please check email / username',
              'error'
            )
          }
        })
    },

    getAll (context) {
      axios.get('/products', {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('SET_PRODUCTS', data.data)
          // this.products = data.data
        })
        .catch(err => {
          console.log(err)
        })
    },

    getOne (context, id) {
      axios.get(`/products/${id}`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('SET_PRODUCT', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteProduct (context, id) {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!'
          )
          // this.$emit('deleteProduct', id)
          axios.delete(`/products/${id}`, {
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
            .then(data => {
              context.dispatch('getAll')
            })
            .catch(err => {
              console.log(err.response.data)
            })
        }
      })
    },

    editProduct (context, object) {
      axios.put(`/products/${object.id}`, {
        name: object.name,
        image_url: object.image_url,
        price: Number(object.price),
        stock: Number(object.stock)
      }, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Edit Succesful',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },

    addProduct (context, payload) {
      axios.post('/products', payload, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.dispatch('getAll')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Added',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/products')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },

    filterProducts (context, keyword) {
      context.commit('SET_KEYWORD', keyword)
    }
  },
  getters: {
    filtered: state => {
      // console.log(state.keyword)
      return state.products.filter(product => (product.name).includes(state.keyword))
    }
  },
  modules: {
  }
})
