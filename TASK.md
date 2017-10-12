Here you have a complete react 16 enviorment with everything setup.
Your task is to:

Basic react/redux:
1) Pass props to 'src/routes/App' component from AppContainer in order to fetch data remotely.  HINT: You should do this in src/routes/AppContainer file.
1) Connect 'src/routes/App' component to redux state.
2) When user click button 'Fetch users' inside <App/>, you will need to call fetchUsers props (which is a function). You will receive props:

isRequesting -> true.false meaning that we are fetching data
error -> null or string meaning that we have an error during data fetch
users -> actual array of users that we need to display.

3) Create proper component and list those users in <App> component.
4) Style this component a little bit.
5) Test your component.

Senior tasks: 
Create full Add/Remove funcionality for users list.

Ultimate senior task: 
Remove sagas file and try to recreate it's funcionality without checking how it's writed.