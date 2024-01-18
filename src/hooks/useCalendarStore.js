import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onCreatedModal, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {

  const dispatch = useDispatch();

  const {events, activeEvent} = useSelector(state => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  }

  const startSavingEvent = async(calendarEvent) => {

    if (calendarEvent._id) {
      // Updating
      dispatch(onUpdateEvent({...calendarEvent}));
    } else {
      // Creating
      dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}));
    }
  }

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  }

  return {
    // Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    // Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
