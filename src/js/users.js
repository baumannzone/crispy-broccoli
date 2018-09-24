import contract from 'truffle-contract'
import UsersContract from '@contracts/Users.json'

const Users = {
  contract: null,
  instance: null,
  init () {
    let self = this
    return new Promise(function (resolve, reject) {
      self.contract = contract(UsersContract)
      self.contract.setProvider(window.web3.currentProvider)
      self.contract.deployed()
        .then(instance => {
          self.instance = instance
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  addUser (name, points) {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.addUser(name, points, {from: window.web3.eth.accounts[0]})
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[addUser]]')
          reject(err)
        })
    })
  },
  plusFive (id) {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.plusFive(id, {from: window.web3.eth.accounts[0]})
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[addUser]]')
          reject(err)
        })
    })
  },
  deleteUser (id) {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.deleteUser(id, {from: window.web3.eth.accounts[0]})
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[deleteUser]]')
          reject(err)
        })
    })
  },
  resetGame () {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.resetGame({from: window.web3.eth.accounts[0]})
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[resetGame]]')
          reject(err)
        })
    })
  },
  resetPoints () {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.resetPoints({from: window.web3.eth.accounts[0]})
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[resetPoints]]')
          reject(err)
        })
    })
  },
  getUsers () {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.getUsers({from: window.web3.eth.accounts[0]})
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[getUsers]]')
          reject(err)
        })
    })
  }
}

export default Users
