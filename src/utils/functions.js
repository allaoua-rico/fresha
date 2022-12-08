import db from "../db.json";

export function resolveEmploye(id) {
  const { staff } = db;
  return staff.find((emp) => parseInt(id) === emp.id);
}
export function resolveService(id, opt) {
  const { services } = db;
  let service = services.find((service) => parseInt(id) === service.id);
  const option = service.options.find((option) => parseInt(opt) === option.id);
  const { options, ...serviceWithoutOptions } = service;
  service = { ...serviceWithoutOptions, option };
  return service;
}
export function resolveSelectedServicesArray(array) {
  const resolvedArray = array.map((service) =>
    resolveService(service.id, service.opt)
  );
  // console.log(resolvedArray);
  return resolvedArray;
}
export function fetchAppointmentById(apptId) {
  const { appointments } = db;
  const appointment = appointments.find((appt) => appt.id === parseInt(apptId));
  return appointment;
}
export function fetchAppointments() {
  const { appointments } = db;
  return appointments;
}
export function dipatchAppt(dispatch, appt) {
  dispatch({
    type: "SET_APPOINTMENT",
    appointment: appt,
  });
}
export function getTotalFromNonResolvedServices(appt) {
  const selectedServices = resolveSelectedServicesArray(appt.services);
  const total = selectedServices.reduce((accumulator, service) => {
    return accumulator + service?.option?.price;
  }, 0);
  return total;
}
