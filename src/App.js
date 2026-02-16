import CreateUserForm from './components/CreateUserForm';
import illustration from './components/illustration.svg';
import './App.css';

export default function App() {
  return (
    <div className='page'>
      <h1 className='title'>
        Welcome to <span>E’Shop!</span>
      </h1>
      <div className='content'>
        <div className='left'>
          <img src={illustration} alt='shop' />
        </div>
        <div className='right'>
          <CreateUserForm />
        </div>
      </div>
    </div>
  );
}
