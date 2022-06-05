import React from 'react';
import styles from './ModalDados.module.css';
import Input from '../../../../Components/Input/Input';
function ModalDados() {

//     var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

  return (
      <div>
          <button id="myBtn">Open Modal</button>

            <div id="styles.myModal" className={styles.modal}>

            <div className={styles.modal__content}>
                <span className={styles.close}>&times;</span>
                <p>Editar cadastro</p>

                <form action="#" name="formEdit">

                </form>
            </div>

</div> 


      </div>

)
}

export default ModalDados;