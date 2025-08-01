import Rating from "./components/Rating";

const App = () => {
  return ( 
  <div>
    <Rating feedbackMessages= {[
      'Odiei',
      'Não gostei',
      'Meh',
      'Gostei',
      'Amei'
    ]}/>
  </div> 
  );
}
 
export default App;