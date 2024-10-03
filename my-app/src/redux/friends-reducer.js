import yana from './assets/female_black.png';
import innesa from './assets/female_blond.png';
import akito from './assets/female_red.png';
import voldemar from './assets/male_blond.png';
import ibragim from './assets/male_dag.png';
import vorona from './assets/male_afro.png';

const initialState = {
  
  friendsData: [
    {id: 1, userName: 'Yana', userAvatar: yana},
    {id: 2, userName: 'Innesa', userAvatar: innesa},
    {id: 3, userName: 'Akito', userAvatar: akito},
    {id: 4, userName: 'Voldemar', userAvatar: voldemar},
    {id: 5, userName: 'Ibragim', userAvatar: ibragim},
    {id: 6, userName: 'Vorona', userAvatar: vorona},
  ],

};

const friendsReducer = (state = initialState, action) => {
  return state;
}

export default friendsReducer;