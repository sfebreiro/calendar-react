import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {

  const {startDeletingEvent, hasEventSelected} = useCalendarStore();

  const handleDelete = () => {
    startDeletingEvent();
  }

  return (
    <button
      className="btn btn-danger fa-danger"
      onClick={handleDelete}
      style={{
        display: hasEventSelected ? '' : 'none'
      }}
    >
      Eliminar nota
      {/* <i className="fas fa-plus"></i> */}
    </button>
  )
}
