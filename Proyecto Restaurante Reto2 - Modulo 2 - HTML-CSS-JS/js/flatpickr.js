const config_fecha = {
	dateFormat: "d-m-Y",
	minDate: "today",
	locale: "es"
};

flatpickr("#fecha", config_fecha);

const config_hora = {
	enableTime: true,
	noCalendar: true,
	minTime: "8:00",
	maxTime: "18:00",
};

flatpickr("#hora", config_hora);
