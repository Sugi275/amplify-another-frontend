import Flexbox from './component/flexbox';

// Amplify
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Flexbox></Flexbox>
    </div>
  );
}

export default App;
