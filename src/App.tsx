import React, { useEffect } from 'react';
import './App.css';
import { Button } from 'antd';
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      work
      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
}

export default App;
