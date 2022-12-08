export const getBookingTotal = (booking) => {
  return booking.services.reduce((accumulator, option) => {
    return accumulator + option.price;
  }, 0);
};

export const initialState = {
  booking: {
    services: [],
    employe: {},
    store: {
      name: "Mellow Nails Artistry",
      location:
        "7774 Prince Abdulaziz Ibn Musaid Ibn Jalawi - Al Olaya Dist. Unit No. 14 Riyadh 12221 - 3888, Riyadh",
      images: ["images/SliderImage1.webp"],
      link: "/",
    },
    time: null,
    notes: "",
    bookWithStaff: false,
  },
  user: {
    firstName: "First Name",
    lastName: "Last  Name",
    mobile: "555555555",
    email: "email@email.com",
    birthDay: { day: 19, month: "June", year: 1998 },
    gender: "male",
    addresses: {
      name: "home",
      shortAddress: "RAHA3443",
      buildingNo: 2929,
      streetAddress: "Raihana Bint Zaid",
      secondaryNo: 8118,
      district: "AlArid",
      zipCode: 13337,
      city: "Riyadh",
      country: "KSA",
    },
  },
  appointment: {
    id: 0,
    services: [
      { id: 0, opt: 2 },
      { id: 0, opt: 3 },
      { id: 1, opt: 2 },
    ],
    employe: { id: 0, name: "Caroline", rating: 4.6 },
    store: {
      name: "Mellow Nails Artistry",
      location:
        "7774 Prince Abdulaziz Ibn Musaid Ibn Jalawi - Al Olaya Dist. Unit No. 14 Riyadh 12221 - 3888, Riyadh",
      images: ["images/SliderImage1.webp"],
      link: "/",
    },
    time: {
      hourAndMinutes: "11:30",
      day: 30,
      month: "May",
      year: 2022,
      durationInMinutes: 15,
    },
    notes: "notesss",
    bookWithStaff: false,
    isConfirmed: true,
    bookingRef: "FAFFEC48",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKING": {
      return {
        ...state,
        booking: {
          ...state.booking,
          services: action.booking.services,
          employe: action.booking.employe,
        },
      };
      break;
    }
    case "SET_BOOKING_EMPLOYE": {
      return {
        ...state,
        booking: {
          ...state.booking,
          employe: action.employe,
          // services: state.booking.services,
        },
      };
      break;
    }
    case "SET_BOOKING_SERVICES": {
      return {
        ...state,
        booking: {
          ...state.booking,
          services: action.services,
        },
      };
      break;
    }
    case "SET_BOOKING_TIME": {
      return { ...state, booking: { ...state.booking, time: action.time } };
      break;
    }
    case "SET_BOOKING_BOOKWITHSTAFF": {
      return {
        ...state,
        booking: { ...state.booking, bookWithStaff: action.bookWithStaff },
      };
      break;
    }
    case "SET_BOOKING_NOTES": {
      return {
        ...state,
        booking: { ...state.booking, notes: action.notes },
      };
      break;
    }
    case "SET_USER": {
      return { ...state, user: action.user };
      break;
    }
    case "ADD_REMOVE_SERVICE": {
      const { id, opt } = action.service;
      // Check if the service is in the booking
      const index = state.booking?.services?.findIndex(
        (service) => service.id === id
      );
      let servicesCopy = [...state.booking.services];
      if (index < 0)
        // if service not found (index < 0), add service
        return {
          ...state,
          booking: {
            ...state.booking,
            services: [...servicesCopy, { id: id, opt: opt }],
          },
        };
      // if service found, check if the option is the same
      const sameOpt = servicesCopy[index].opt === opt;
      servicesCopy.splice(index, 1);
      if (sameOpt)
        return {
          ...state,
          booking: { ...state.booking, services: servicesCopy },
        };

      return {
        ...state,
        booking: {
          ...state.booking,
          services: [...servicesCopy, { id: id, opt: opt }],
        },
      };
      break;
    }
    case "SET_APPOINTMENT": {
      return {
        ...state,
        appointment: {
          ...action.appointment,
        },
      };
      break;
    }
    default:
      return state;
  }
};
export default reducer;
