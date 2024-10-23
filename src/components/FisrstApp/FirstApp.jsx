import './First.css'
import cat1 from '../../image/cat1.jpg'
import cat2 from '../../image/cat2.jpg'
import cat3 from '../../image/cat3.png'

export default function FirstApp() {

    const cat1Image = {
        width: '200px',
        height: '230px',
        border: '5px solid grey', 
        display: 'flex'
        
        
    }

    return(
        <div>
        <h2 className="title">
            FirstApp Component!!!
        </h2>

        <div style={{textAlign: 'center', fontSize: '25px', backgroundColor: 'salmon', marginLeft: '500px'}}>
            안녕~~ 오늘은 목요일이야!
        </div>

        <img src={cat1} alt="cat1" style={cat1Image}/>
        </div>

       
    );
}