const router = require('express').Router()


const eventsControl = require('../controllers/events.controller')
module.exports = ()=>{
    router.post('/event', eventsControl.saveEvents)
    router.get('/event', eventsControl.fetchEvents)
    router.delete('/event/:id', eventsControl.deleteEvent)
    router.get('/events/:id', eventsControl.fetchEvent)
    router.get('/eventsdata/:id', eventsControl.fetchEventsData)
    router.put('/events/:id',eventsControl.updateEvent)
    return router;
}
