export default function printMe(){
  console.log('I get called from print.js!');
}

 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
  })
}
