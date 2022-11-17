export const errorCheck = (value, type) => {

    switch (type) {

        case "text":

            if (! /[a-z]/gi.test(value)) {
                return "Formato no válido";
            }

        break;

        case "email":

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                return "Escriba un formato correcto de email";
            }

        break;

        case "repeatEmail":

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                return "Escriba un formato correcto de email";
            }

        break;

        case "phone":

            //Tiene un bug
            if (! /[\d()+-]/g.test(value)) {
                return "Escriba un formato de teléfono correcto";
            }

        break;

        case "password":

            if (! /[a-z]/gi.test(value)) {
                return "Formato no válido";
            }

        break;

        default:
            console.log("fatal error!");

        break;

    }


};