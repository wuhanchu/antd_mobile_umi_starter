import standard from "./standard"

const { SETTING } = process.env

export let setting = { standard }[SETTING] || standard

export default setting
