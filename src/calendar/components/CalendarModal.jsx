import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        console.log('cerrando modal');
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            // className="modal"
            // overlayElement="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1>Título</h1>
            <hr/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione hic dolores molestias eveniet similique repellat ab veritatis quasi. Quia fuga minima aspernatur similique suscipit esse ipsum eos quaerat laudantium qui?</p>
        </Modal>
    )
}
