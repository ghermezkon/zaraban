import validatejs from 'validate.js';
//------------------------------------------------------------
const validation = {
    ostan_code: { presence: { message: '^*الزامی', allowEmpty: false } },
    ostan_name: { presence: { message: '^*الزامی', allowEmpty: false } }
}
function validator(fieldName, value) {
    var formValues = {}
    formValues[fieldName] = value

    var formFields = {}
    formFields[fieldName] = validation[fieldName]

    const result = validatejs(formValues, formFields)

    if (result) {
        return result[fieldName][0]
    }
    return null
}
export default validator;