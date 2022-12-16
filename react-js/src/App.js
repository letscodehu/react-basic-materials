import { useState } from 'react';
import Button from './components/Button';
import Overlay from './components/Overlay';

function App() {
    const [overlay, setOverlay] = useState(false)
    function toggleOverlay() {
        setOverlay(!overlay)
    }
    return (
        <div className="App">
            <Button toggle={toggleOverlay} />
            {overlay && <Overlay toggle={toggleOverlay} />}
        </div>
    );
}

export default App;
