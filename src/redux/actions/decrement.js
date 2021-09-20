export default function decrement() {
   return (dispatch) => {
       dispatch({
           type: 'decrement',
       })
   }
}