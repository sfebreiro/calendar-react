import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Samuel'
      }
    });
    openDateModal();
  }

  return (
    <button
      className="btn btn-primary fa"
      onClick={handleClickNew}
    >
      Nueva nota
      {/* <i className="fas fa-plus"></i> */}
    </button>
  )
}
