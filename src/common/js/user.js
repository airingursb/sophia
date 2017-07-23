export default class User {
  constructor ({id, username, password, sex, school, className, phoneNumber, state}) {
    this.id = id
    this.username = username
    this.password = ''
    this.sex = sex
    this.school = school
    this.className = className
    this.phoneNumber = phoneNumber
    this.state = state
  }
}
