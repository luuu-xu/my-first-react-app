import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Lifecycles from './Lifecycles';
import Profile from './Profile';
import GGHooks from './GGHooks';
import GG from './GG';
import GGProps from './GGProps';
import TOP from './TOP';
import { TOPHooks, TOPuseEffect } from '../components/TOPHooks';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='profile' element={<Profile />} />
        <Route path='GG' element={<GG />}>
          <Route path='GGProps' element={<GGProps />} />
          <Route path='GGhooks' element={<GGHooks />} />
        </Route>
        <Route path='TOP' element={<TOP />}>
          <Route index element={<TOPHooks />} />
          <Route path='TOPHooks' element={<TOPHooks />} />
          <Route path='TOPuseEffect' element={<TOPuseEffect />} />
        </Route>
        <Route path='lifecycles' element={<Lifecycles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;