const saberPlatilloExistente = (platilloLS, platillo) => {
	return platilloLS.idPlato === platillo.idPlato ? true : false;
};

const leerLocalStorage = (platilloLS, platillo) => {
	let saber = platilloLS.some((platilloLS) => {
		return saberPlatilloExistente(platilloLS, platillo);
	});
	return saber;
};

const obtenerPlatillosLocalStorage = (nameItem) => {
	let platilloLS;
	if (localStorage.getItem(nameItem) === null) {
		platilloLS = [];
	} else {
		platilloLS = JSON.parse(localStorage.getItem(nameItem));
	}
	return platilloLS;
};

const guardarSeleccionMenuLocalStorage = (platillo, nameItem) => {
	let platilloLS = obtenerPlatillosLocalStorage(nameItem);
	if (!leerLocalStorage(platilloLS, platillo)) {
		platilloLS.push(platillo);
		localStorage.setItem(nameItem, JSON.stringify(platilloLS));
		return true;
	} else {
		return false;
	}
};

const eliminarPlatilloByIdLocalStorage = (platillo, nameItem) => {
	let platilloLS = obtenerPlatillosLocalStorage();

	platilloLS.forEach((platillos, index) => {
		if (saberPlatilloExistente(platillos, platillo)) {
			platilloLS.splice(index, 1);
		}
	});
	localStorage.setItem(nameItem, JSON.stringify(platilloLS));
};

const removerItemLocalStorage = (nameItem) => {
	localStorage.removeItem(nameItem);
};

const vaciarLocalStorage = () => {
	localStorage.clear();
};

export {
	guardarSeleccionMenuLocalStorage,
	obtenerPlatillosLocalStorage,
	leerLocalStorage,
	saberPlatilloExistente,
	eliminarPlatilloByIdLocalStorage,
	removerItemLocalStorage,
	vaciarLocalStorage,
};
