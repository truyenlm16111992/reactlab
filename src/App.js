import logo from './logo.svg';
import './App.css';
import BTComponent from './BTCompoment/BTComponent';
import BindingData from './BindingData/BindingData';
import RenderWithCondition from './RenderWithCondition/RenderWithCondition';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleComponent from './StyleComponent/StyleComponent';
import RenderComponentWithMap from './RenderComponentWithMap/RenderComponentWithMap';
import DemoState from "./State/DemoState";
import BaiTapCar from './State/BaiTapCar';
import DemoProps from './Props/DemoProps';
import BTShoeShop from './BTShoeShop/BTShoeShop';
import DemoRedux from './DemoRedux/DemoRedux';
import BTPhoneRedux from './BTPhoneRedux/BTPhoneRedux';

function App() {
  return (
    <div className="App">
      <BTComponent></BTComponent>
      <BindingData/>
      <RenderWithCondition/>
      <HandleEvent/>
      <StyleComponent/>
      <RenderComponentWithMap/>
      <DemoState/>
      <BaiTapCar/>
      <DemoProps/>
      <BTShoeShop/>
      <DemoRedux/>
      <BTPhoneRedux/>
    </div>
  );
}

export default App;

// state
// props
// redux
// redux-toolkit
// react-router
// form (react-hook-form)
// lifeCycle 
// useEffect, useMemo, useRef, useCallback, useId, useTransition, memo
// react-query
// typescript