import { Router } from "express";
import { 
    getAllAppointmentsController,
    getAllAppointmentByIdController, 
    postAppointmentController, 
    putAppointmentController 
} from "../../controllers/appointment";

const routerAppointment: Router = Router();

// /appointments/
routerAppointment.get("/", getAllAppointmentsController);
// /appointments/2
routerAppointment.get("/:id", getAllAppointmentByIdController);
// /appointments/schedule
routerAppointment.post("/schedule", postAppointmentController);
// /appointments/cancel
routerAppointment.put("/cancel", putAppointmentController);

export default routerAppointment; 