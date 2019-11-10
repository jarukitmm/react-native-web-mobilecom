
static function login(username,password) {
    axios
      .post(`http://localhost:3000/api/auth/users/login`, {username:username,password:password})
      .then(res=>{
        console.log(res);
        console.log(res.data);
        // this.onLoginSuccess(res.data.firstname);
          // this.setState({user:res.data.username});
          // this.setState({pss:res.data.password});
        this.setState({user:res.data.user});
      })
} export function login()