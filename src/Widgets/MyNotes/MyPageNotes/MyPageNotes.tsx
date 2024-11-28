import MyPageNote from '../../../Shared/UI/MyPageNote/MyPageNote';
import './MyPageNotes.css';

function MyPageNotes() {
   return (
      <div className='my__page-notes'>
         <div className="my__notes-title__inner">
            <h3 className="my__notes-title">Мои заметки</h3>
         </div>
         <p className="my__notes-description">Заметки, созданные мной</p>
         <div className="my__page-notes-list">
            <MyPageNote />
         </div>
      </div>
   )
}

export default MyPageNotes;