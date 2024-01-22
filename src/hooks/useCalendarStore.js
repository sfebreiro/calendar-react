import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';
import {calendarApi} from '../api';
import { convertEventsToDate } from '../helpers';

export const useCalendarStore = () => {

  const dispatch = useDispatch();

  const {events, activeEvent} = useSelector(state => state.calendar);
  const {user} = useSelector(state => state.auth);


  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  }

  const startSavingEvent = async(calendarEvent) => {

    try {      
      if (calendarEvent.id) {
        // Updating
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({...calendarEvent, user}));
        return;
      }       
        // Creating
        const {data} = await calendarApi.post('/events', calendarEvent);
        dispatch(onAddNewEvent({...calendarEvent, id: data.evento.id, user}));

    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    } 

  }

  const startDeletingEvent = async() => {

    try {      
        await calendarApi.delete(`/events/${activeEvent.id}`);
        dispatch(onDeleteEvent());    

    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar', 'No puedes eliminar ese evento', 'error'); //error.response.data.msg
    } 
    
  }

  const startLoadingEvents = async() => {
    try {
      const {data} = await calendarApi.get('/events');
      const events = convertEventsToDate(data.eventos);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log(error, 'Error cargando eventos');
    }
  }

  return {
    // Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    // Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents
  }
}
